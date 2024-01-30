import Modal from "react-modal";
import "./customModal.css";

const CustomModal = ({ isOpen, onRequestClose, contentComponent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div>
        <button className="close-button" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      <div style={{ marginTop: "20px", marginRight: "2px" }}>
        {contentComponent}
      </div>
    </Modal>

    // <Modal
    //   aria-labelledby="modal-title"
    //   aria-describedby="modal-desc"
    //   open={isOpen}
    //   onClose={onRequestClose}
    //   sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    // >
    //   <Sheet
    //     variant="outlined"
    //     sx={{
    //       maxWidth: 500,
    //       borderRadius: "md",
    //       p: 3,
    //       boxShadow: "lg",
    //     }}
    //   >
    //     <ModalClose variant="plain" sx={{ m: 1 }} />
    //     <Typography
    //       component="h2"
    //       id="modal-title"
    //       level="h4"
    //       textColor="inherit"
    //       fontWeight="lg"
    //       mb={1}
    //     >
    //       This is the modal title
    //     </Typography>
    //     <Typography id="modal-desc" textColor="text.tertiary">
    //       Make sure to use <code>aria-labelledby</code> on the modal dialog with
    //       an optional <code>aria-describedby</code> attribute.
    //     </Typography>
    //   </Sheet>
    // </Modal>
  );
};

export default CustomModal;
