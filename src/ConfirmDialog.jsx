import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';


export default function AlertDialog({openDailog, handleClickClose, handleClickOpen,deleteItem}) {
 
   
  return (
    <div>
      <Dialog
        open={openDailog}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='p-5'>
            <p>Are you Sure Want to Delete ?</p>
        </div>
        <DialogActions>
          <button className='btn btn-danger' onClick={handleClickClose}>Cancel</button>
          <button className='btn btn-primary' onClick={deleteItem} >Delete</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}