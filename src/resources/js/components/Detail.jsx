import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { setHideData } from '../slice/PopupSlice';

function contentLabel(status) {
    if (status == 'approved') {
        return <label>Approved</label>
    } else if (status == 'rejected') {
        return <label>Rejected</label>
    } else if (status == 'pending') {
        return <label>Waiting For Approval</label>
    }
}

const Detail = () => {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.popup.is_show);
    const data = useSelector((state) => state.popup.data);

    let claimData = {
        claim_id : "",
        claim_type_name : "",
        staff_name : "",
        amount : "",
        request_date : "",
        status : "",
    }

    const handleClose = () => dispatch(setHideData());
    let classModal = 'modal fade';
     if(isShow){
         classModal = 'modal';
     }

     console.log(data);
     if(data.id > 0) {
        claimData.claim_id = data.id;
        claimData.claim_type_name = data.claim_type.name;
        claimData.staff_name = data.staff_name;
        claimData.amount = data.amount;
        claimData.request_date = data.request_date;
        claimData.status = contentLabel(data.status);
     }

    return (
        <>
      <Modal
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail Claim #{claimData.claim_id} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='table-responsive'>
            <table className='table table-striped table-sm'>
                <tr>
                    <th>Claim Type :</th><td>{claimData.claim_type_name}</td>
                </tr>
                <tr>
                    <th>Staff Name :</th><td>{claimData.staff_name}</td>
                </tr>
                <tr>
                    <th>Amount :</th><td>{claimData.amount}</td>
                </tr>
                <tr>
                    <th>Request Date :</th><td>{claimData.request_date}</td>
                </tr>
                <tr>
                    <th>Status :</th><td>{claimData.status}</td>
                </tr>
            </table>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )
}

export default Detail;
