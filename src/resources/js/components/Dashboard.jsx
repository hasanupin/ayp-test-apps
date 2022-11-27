import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Detail from './Detail';
import Store from './Store';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowData } from '../slice/PopupSlice';

function contentLabel(status) {
    if (status == 'approved') {
        return <label>Approved</label>
    } else if (status == 'rejected') {
        return <label>Rejected</label>
    } else if (status == 'pending') {
        return <label>Waiting For Approval</label>
    }
}

const Dashboard = () => {
    const [claimsData, setClaimsData] = React.useState([]);
    useEffect(() => {
        axios.get(`/api/claim`)
        .then(res => {
          const claims = res.data.data;
          setClaimsData(claims);
        })
    },[]);

    const dispatch = useDispatch();
    return (
        <div className="table-responsive">
        <table className="table table-striped table-sm table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Claim Type</th>
            <th scope="col">Staff Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Request Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
        {
            claimsData
            .map((claim,index) =>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{claim.claim_type.name}</td>
                    <td>{claim.staff_name}</td>
                    <td>{claim.amount}</td>
                    <td>{claim.request_date}</td>
                    <td>{contentLabel(claim.status)}</td>
                    <td><button onClick={() => dispatch(setShowData(claim))} className="btn btn-primary">Detail</button></td>
                </tr>
            )
        }
        </tbody>
        </table>
        </div>
      )
  }
// DOM element
if (document.getElementById('dashboard')) {
    const Index = ReactDOM.createRoot(document.getElementById("dashboard"));
    Index.render(
        <React.StrictMode>
            <Provider store={Store}><Dashboard /><Detail /></Provider>
        </React.StrictMode>
    )
}
