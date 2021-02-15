import React from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from '../users/UsersData'

const JournalEntryNewEntry = () => {
    return (
    <>
    <CRow>
        <CCol xs="12" sm="12">
            <CCard>
                {/* The Header contains form for Journal General */}
                <CCardHeader>
                <CRow>
                    <CCol sm-6>
                        <CFormGroup>
                        <CLabel htmlFor="ccmonth">JOURNAL TYPE</CLabel>
                        <CSelect className="testing" custom name="ccmonth" id="ccmonth">
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
                    <CCol sm-6>
                    <CFormGroup>
                        <CLabel htmlFor="company">JOURNAL NUMBER</CLabel>
                        <CInput id="company" className="testing" placeholder="Enter your company name" disabled />
                    </CFormGroup>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm-6>
                        <CFormGroup>
                            <CLabel htmlFor="date-input">DATE INPUT</CLabel>
                            <CInput type="date" id="date-input" name="date-input" placeholder="Date" />
                        </CFormGroup>
                    </CCol>
                    <CCol sm-6>
                    <CFormGroup>
                        <CLabel htmlFor="note">NOTE</CLabel>
                        <CInput id="note" placeholder="A Note (Optional)"/>
                    </CFormGroup>
                    </CCol>
                </CRow>
                </CCardHeader>
                {/* The Body contains form for journal details */}
                <CCardBody>
                    <CRow>
                        <CCol sm-5>
                            <CFormGroup>
                            <CLabel htmlFor="ccmonth">JOURNAL TYPE</CLabel>
                            {/* <CSelect custom name="ccmonth" id="ccmonth">
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
                            </CSelect> */}
                            </CFormGroup>
                        </CCol>
                        <CCol sm-3>
                            <CFormGroup>
                            <CLabel htmlFor="note">DEBIT</CLabel>
                            {/* <CInput id="note" placeholder="Amount"/> */}
                            </CFormGroup>
                        </CCol>
                        <CCol sm-3>
                            <CFormGroup>
                            <CLabel htmlFor="note">CREDIT</CLabel>
                            {/* <CInput id="note" placeholder="Amount"/> */}
                            </CFormGroup>
                        </CCol>
                        <CCol sm-1>
                            <CFormGroup>
                            {/* <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Add New</CButton> */}
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                        <CSelect custom name="ccmonth" id="ccmonth">
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
                        </CCol>
                        <CCol>
                        <CInput id="note" placeholder="Amount"/>
                        </CCol>
                        <CCol>
                        <CInput id="note" placeholder="Amount"/>
                        </CCol>
                        <CCol>
                        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Add New</CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    </>
    )
}

export default JournalEntryNewEntry
