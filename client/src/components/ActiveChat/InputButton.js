import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import UploadDialog from "./UploadDialog";
import FileLogo from "../../images/ic-file.svg";

const InputButton = ({ addAttachments }) => {
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
        <img src={FileLogo} alt="Attach File Logo" />
      </IconButton>
      <UploadDialog
        open={dialogIsOpen}
        onClose={handleClose}
        addAttachments={addAttachments}
      />
    </>
  );
};
export default InputButton;
