import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({isEdit, handleChange,handleUpdate, handleSubmit, form, resetForm, open, handleOpen, handleClose}) {
 
  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Add Student</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h3>Student Form</h3>
        <form onSubmit={isEdit ? handleUpdate : handleSubmit}>
                <div class="form-row row" style={{ width: "300px" }}>
                    <div class="col-md-12 my-3 ">
                        <input type="text" name={"firstName"} value={form.firstName} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="First name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text" name={"lastName"} value={form.lastName} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Last name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="email" name={"email"} value={form.email} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="email" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="number" name={"phoneNumber"} value={form.phoneNumber} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="phone Number" />
                    </div>
                    <button type='submit' className={`btn ${isEdit ? "btn-success": "btn-primary"}`}>{isEdit ? "Update" :"Submit"}</button>
                    <div onClick={()=>resetForm()} className={`btn mt-3 btn-danger`}>{isEdit ? "Cancel" :"Reset"}</div>
                </div>
            </form>
        </Box>
      </Modal>
    </div>
  );
}