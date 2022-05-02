import React, { useState } from "react";
import { IconButton, Badge } from "@material-ui/core";
import UploadDialog from "./UploadDialog";
import FileLogo from "../../images/ic-file.svg";

const InputButton = ({ attachments, setAttachments }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleDialogOpen}>
        <Badge badgeContent={attachments.length} color="error">
          <img src={FileLogo} alt="Attach File Logo" />
        </Badge>
      </IconButton>
      <UploadDialog
        open={dialogIsOpen}
        onClose={handleClose}
        attachments={attachments}
        setAttachments={setAttachments}
      />
    </>
  );
};
export default InputButton;
