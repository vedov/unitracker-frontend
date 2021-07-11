import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./Modal.css";

function Modal({ children, onClose, open, title }) {
  const [scroll, setScroll] = useState("paper");

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open} scroll={scroll}>
      <DialogTitle className="modal__title">
        {title}
        {onClose ? (
          <IconButton className="modal__button" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers={scroll === "paper"}>{children}</DialogContent>
    </Dialog>
  );
}

export default Modal;
