import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Create extends React.Component {
    state = {
      claim_type_id : '',
      staff_name : '',
      amount : '',
      request_date : '',
      status : '',
      claim_type_list : [],
      is_have_error : false,
      is_success : false,
      error_message : ''
    }

    componentDidMount() {
        axios.get(`/api/claim-type`)
        .then(res => {
          const claimTypeData = res.data.data;
          this.setState({ claim_type_list : claimTypeData });
        })
    }

    handleClaimTypeId = event => {
        this.setState({claim_type_id : event.target.value });
    }

    handleStaffName = event => {
        this.setState({staff_name : event.target.value });
    }

    handleAmount = event => {
        this.setState({amount : event.target.value });
    }

    handleRequestDate = event => {
        this.setState({request_date : event.target.value });
    }

    handleStatus = event => {
        this.setState({status : event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (this.state.claim_type_id == '') {
            this.setState({is_have_error : true, error_message : 'Please Select Claim Type!' });
        } else if (this.state.staff_name == '') {
            this.setState({is_have_error : true, error_message : 'Please Input Staff Name!' });
        } else if (this.state.amount == '') {
            this.setState({is_have_error : true, error_message : 'Please Input Amount!' });
        } else if (this.state.request_date == '') {
            this.setState({is_have_error : true, error_message : 'Please Input Request Date!' });
        } else if (this.state.status == '') {
            this.setState({is_have_error : true, error_message : 'Please Select the Status!' });
        } else {
            this.setState({is_have_error : false, error_message : '' });
            const claimSubmission = {
                claim_type_id : this.state.claim_type_id,
                staff_name : this.state.staff_name,
                amount : this.state.amount,
                request_date : this.state.request_date,
                status : this.state.status
            }

            const response = await axios.post('/api/claim', {claimSubmission});
            const data = response.data;
            if (!data.success) {
                let errorMessage = "";
                const errorMessageResponses = Object.values(response.data.data);
                errorMessageResponses.map((errorMessageResponse, index) => {
                    errorMessage += errorMessageResponse + ',';
                });
                this.setState({is_have_error : true, error_message : errorMessage });
            } else {
                const message = response.data.message ?? "";
                document.getElementById("frm-submit-claim").reset();
                this.setState({is_have_error : false, is_success : true, error_message : message });
            }
        }
    }

    render() {
    let classError = 'alert alert-danger d-none';
    if(this.state.is_have_error) {
        classError = 'alert alert-danger';
    }
    if(this.state.is_success){
        classError = 'alert alert-primary';
    }

    return (
    <div>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Submit Claim</h1>
    </div>
    <div className={classError} role="alert">
        {this.state.error_message}
    </div>
        <form onSubmit={this.handleSubmit} id="frm-submit-claim">
            <div className="row mb-3">
                <label htmlFor="inputStaffName" className="col-sm-2 col-form-label">Claim Type</label>
                <div className="col-sm-10">
                    <select className='form-select' onChange={this.handleClaimTypeId}>
                        <option value={''}>-Please Select Claim Type-</option>
                        {
                            this.state.claim_type_list.
                            map((claim_type, index) =>
                            <option value={claim_type.id}>{claim_type.name}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputStaffName" className="col-sm-2 col-form-label">Staff Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={this.handleStaffName} id="inputStaffName" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputAmount" className="col-sm-2 col-form-label">Amount</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputAmount" onChange={this.handleAmount} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputRequestDate" className="col-sm-2 col-form-label">Request Date</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputRequestDate" onChange={this.handleRequestDate} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputStaffName" className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-10">
                    <select className='form-select' onChange={this.handleStatus}>
                        <option value={'-'}>-Please Select Status-</option>
                        <option value={'approved'}>Approved</option>
                        <option value={'rejected'}>Rejected</option>
                        <option value={'pending'}>Waiting For Approval</option>
                    </select>
                </div>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Save</button>
        </form>
    </div>
    )
    }
  }
// DOM element
if (document.getElementById('create')) {
    const Index = ReactDOM.createRoot(document.getElementById("create"));

    Index.render(
        <React.StrictMode>
            <Create/>
        </React.StrictMode>
    )
}
