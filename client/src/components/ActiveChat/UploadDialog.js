import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
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
  uploaded: {
    display: "flex",
    maxWidth: 448,
    flexWrap: "wrap",
    gap: 10,
  },
  preview: {
    boxSizing: "border-box",
    height: 72,
    border: "solid 2px black",
    borderRadius: 5,
  },
  removeButton: {
    padding: 0,
    width: 20,
  },
}));

const UploadDialog = ({ open, onClose, addAttachments }) => {
  const classes = useStyles();

  const [images, setImages] = useState([]);

  const handleInputChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    try {
      const data = await uploadImage(file);
      setImages((prev) => [...prev, data.url]);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (file) => {
    //env variable cloudname
    const cloudName = "dqzdb34jp";
    // const apiKey = 763453623413197;

    const formData = new FormData();
    formData.append("file", file);
    //formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET)
    formData.append("upload_preset", "kcggo41k");

    // const { data } = await axios.post(
    //   `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
    //   formData
    // );

    const instance = axios.create();

    const { data } = await instance.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );
    return data;
  };

  const handleRemoveImage = (img) => {
    const filtered = images.filter((str) => str !== img);
    setImages(filtered);
  };

  const renderImages = images.map((img, i) => {
    return (
      <div key={`preview ${i}`}>
        <img className={classes.preview} src={img} alt={`preview ${i}`} />
        <IconButton
          variant="contained"
          aria-label="delete"
          className={classes.removeButton}
          onClick={() => handleRemoveImage(img)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Upload images
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
          />
        </label>
      </DialogContent>
      <DialogContent className={classes.uploaded}>{renderImages}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => {
            addAttachments(images);
            onClose();
          }}
        >
          Attach
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDialog;
