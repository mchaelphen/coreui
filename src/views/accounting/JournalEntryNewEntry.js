import React from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CDataTable,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CLabel,
    CRow,
    CSelect,
    CTextarea
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { freeSet } from '@coreui/icons'
import usersData from '../users/UsersData'

class JournalEntryNewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {values: []};
        this.payload = {payload: []}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI() {
        return this.state.values.map((el, i) => 
        <CRow className="my-3" key={this.state.values.map.toString()}>
            <CCol sm="5">
                <CFormGroup>
                    <CSelect custom name="account" id="acc" size="lg">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </CSelect>
                </CFormGroup>
            </CCol>
            <CCol sm="2">
                <CFormGroup>
                    <CTextarea name="description" className="sm-textarea" size="sm"></CTextarea>
                </CFormGroup>          
            </CCol>
            <CCol sm="2">
                <CFormGroup>
                    <CInput name="debit" placeholder="Debit" size="lg"/>
                </CFormGroup>        
            </CCol>
            <CCol sm="2">
                <CFormGroup>
                    <CInput name="credit" placeholder="Credit" size="lg"/>
                </CFormGroup>                            
            </CCol>
            <CCol sm="1">
                <CButton onClick={this.removeClick.bind(this, i)}> <CIcon content={freeSet.cilMinus}></CIcon> </CButton>
            </CCol>
        </CRow>      
        )
     }

     handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });

        let payload = [...payload];
        // payload[idx][fieldName] = this.state.value;
        this.setState({payload})
     }
     
     addClick() {
       this.setState(prevState => ({ values: [...prevState.values, '']}))
     }
     
     removeClick(i) {
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
     }
     
     handleSubmit(event) {
        fetch(this.props.formAction, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: this.state.account,
                description: this.state.description,
                debit: this.state.debit,
                credit: this.state.credit,
            })
        });

        this.setState({account: '', description: '', debit: '', credit: ''});
    //    alert('A name was submitted: ' + this.state.values.join(', '));
    //    event.preventDefault();
     }


    render() {
        return (
        <>
            <CRow>
                <CCol>
                    <h4>Transaction</h4>
                    <h1>Journal Entry</h1>
                </CCol>
                <CCol xs="12" sm="12">
                    <CForm action="http://localhost:8080/api/" method="POST" onSubmit={this.handleSubmit}>
                        <CCard>
                            {/* The Header contains form for Journal General */}
                            <CCardHeader>
                            <CRow className="my-3">
                                <CCol sm="3">
                                    <CLabel htmlFor="transactionNo">Transaction No</CLabel>
                                    <CInput id="transactionNo" className="" placeholder="[Auto]" disabled />
                                </CCol>
                                <CCol sm="3">
                                    <CLabel htmlFor="transactionDate">Transaction Date</CLabel>
                                    <CInput type="date" id="transactionDate" placeholder="Date" />
                                </CCol>
                                <CCol sm="6">
                                    
                                </CCol>
                            </CRow>
                            </CCardHeader>
                            {/* The Body contains form for journal details */}
                            <CCardBody>
                                <CRow className="my-3">
                                    <CCol sm="5">
                                    <CLabel htmlFor="account">Account</CLabel>
                                    </CCol>
                                    <CCol sm="2">
                                    <CLabel htmlFor="desc">Description</CLabel>
                                    </CCol>
                                    <CCol sm="2">
                                    <CLabel htmlFor="debit">Debit</CLabel>
                                    </CCol>
                                    <CCol sm="2">
                                    <CLabel htmlFor="credit">Credit</CLabel>
                                    </CCol>
                                </CRow>
                                {this.createUI()}
                                <CRow>
                                    <CButton type="button" onClick={this.addClick.bind(this)} size="sm" color="primary" className="mx-3"><CIcon name="cil-scrubber" /> Add New</CButton>
                                </CRow>

                                <CRow className="my-3">
                                    <CCol sm="7">
                                        <CFormGroup>
                                        <CLabel> Memo </CLabel>
                                        <CTextarea className="" name="memo"></CTextarea>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol sm="2">
                                        <p>Total Debit</p>
                                        <p>Rp</p>
                                    </CCol>
                                    <CCol sm="2">
                                        <p>Total Credit</p>
                                        <p>Rp</p>
                                    </CCol>
                                </CRow>
        
                                <CRow className="my-3">
                                    <CCol sm="3">
                                        <CLabel>Attachment</CLabel>
                                        <CInputFile ></CInputFile>
                                    </CCol>
                                </CRow>
                            </CCardBody>
        
                        </CCard>
                        <CRow className="my-3 float-right">
                            <CCol sm="12">
                                <CButton type="reset" size="sm" color="danger" className="mx-3"><CIcon name="cil-scrubber" /> Cancel</CButton>
                                <CButton type="submit" size="sm" color="success" className=""><CIcon name="cil-scrubber" /> Submit</CButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCol>
            </CRow>
        </>
        )
    }
}

export default JournalEntryNewEntry
