import React from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  Badge,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 200,
    border: "dashed 4px black",
  },
  cloud: {
    width: 50,
    height: 50,
  },
  fileInput: {
    display: "none",
  },
  attachments: {
    display: "flex",
    maxWidth: 448,
    flexWrap: "wrap",
    gap: 28,
    padding: "20px 24px",
  },
  preview: {
    "& span": {
      padding: 1,
      height: 26,
    },
  },
  image: {
    display: "block",
    height: 110,
    border: "2px solid black",
    borderRadius: 5,
  },
  removeButton: {
    padding: 0,
  },
}));

const UploadDialog = ({ open, onClose, attachments, setAttachments }) => {
  const classes = useStyles();
  const instance = axios.create();

  const handleInputChange = async (event) => {
    event.preventDefault();
    try {
      const data = await uploadImages(event.target.files);
      setAttachments((prev) => [
        ...prev,
        ...data.map((item) => {
          return item.data.url;
        }),
      ]);
      event.target.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImages = (files) => {
    return Promise.all(
      [...files].map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
        return instance.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          formData
        );
      })
    );
  };

  const handleRemoveImage = (img) => {
    const filtered = attachments.filter((str) => str !== img);
    setAttachments(filtered);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Attach images
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <label className={classes.inputBox}>
          <Typography className={classes.label}>
            Drag images here or click
          </Typography>
          <CloudUploadIcon className={classes.cloud} />
          <input
            className={classes.fileInput}
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange(e)}
            multiple
          />
        </label>
      </DialogContent>
      <DialogContent className={classes.attachments}>
        {attachments.map((img, i) => {
          return (
            <Badge
              key={`preview ${i}`}
              className={classes.preview}
              component="div"
              badgeContent={
                <IconButton
                  aria-label="delete"
                  onClick={() => handleRemoveImage(img)}
                  className={classes.removeButton}
                >
                  <DeleteForeverIcon />
                </IconButton>
              }
              color="secondary"
            >
              <img className={classes.image} src={img} alt={`preview ${i}`} />
            </Badge>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
