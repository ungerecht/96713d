import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: ({ numImages }) =>
      !numImages || numImages === 1 ? "column" : "column-reverse",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    margin: "5px 0",
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: ({ numImages }) =>
      numImages !== 1 ? "8px 16px" : "4px 16px 8px 16px",
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    overflow: "hidden",
  },
  images: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginTop: ({ numImages }) => numImages > 1 && 10,
  },
  image: {
    display: "block",
    objectFit: ({ numImages, isText }) =>
      numImages === 1 && isText ? "cover" : "fill",
    objectPosition: "left top",
    width: ({ numImages }) => (numImages === 1 ? "100%" : 100),
    height: ({ numImages, isText }) =>
      (numImages === 1 && isText && 122) || (numImages === 1 && 155) || 77.5,
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles({ numImages: attachments?.length, isText: text });

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      {(attachments?.length !== 1 || (attachments?.length === 1 && !text)) && (
        <Box className={classes.images}>
          {attachments?.map((image, i) => {
            return (
              <Box key={`attachment ${i}`} className={classes.bubble}>
                <img
                  className={classes.image}
                  src={image}
                  alt={`attachment ${i + 1}`}
                />
              </Box>
            );
          })}
        </Box>
      )}
      {text && (
        <Box className={classes.bubble}>
          {attachments?.length === 1 && (
            <img
              className={classes.image}
              src={attachments[0]}
              alt="attachment"
            />
          )}
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SenderBubble;
