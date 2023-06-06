import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal } from "@mui/material";
import React from "react";
import { SIGN_IN } from "../../utilities/constants";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { boxStyle, closeStyle } from "./styles";

// Get the modalType from the store and render the appropriate component.
const ModalContent = ({ modalType, onClose }) => {
    return modalType === SIGN_IN ? (
        <SignIn onClose={onClose} />
    ) : (
        <SignUp onClose={onClose} />
    );
};

const AuthInModal = ({ open, onClose, modalType }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={boxStyle}>
                <Box sx={closeStyle} onClick={onClose}>
                    <CloseIcon />
                </Box>
                <ModalContent modalType={modalType} onClose={onClose} />
            </Box>
        </Modal>
    );
};

export default AuthInModal;
