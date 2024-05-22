
import { Modal, Box, Typography, Button } from '@mui/material';
import css from './ModalDelete.module.css';

export default function ModalDelete({ open, handleClose, handleConfirm }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={css.modalBox}>
        <Typography variant="h6" component="h2">
          Confirm Delete
        </Typography>
        <Typography className={css.modalText}>
          Are you sure you want to delete this contact?
        </Typography>
        <Box className={css.modalActions}>
          <Button onClick={handleClose} className={css.modalBtn}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleConfirm}>Delete</Button>
        </Box>
      </Box>
    </Modal>
  );
}
