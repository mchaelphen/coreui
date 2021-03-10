import React from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react'

import usersData from '../users/UsersData'

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['id','journal', 'date', 'created', 'action']
  

const JournalEntry = () => {
    return (
        <>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            <CButton color="primary" className="px-4 my-3" to="/journal-entry/new-entry">CREATE NEW</CButton>
              <h4>List Data</h4>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              // columnFilter
              tableFilter
              columnFilter
              className="font2"
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {
              {
                'action':
                  (item)=>(
                    <td>
                      <CButton color="primary" className="px-4">Edit</CButton>
                    </td>
                  )
              }
            }
            />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
        </>
    )
}

export default JournalEntry
