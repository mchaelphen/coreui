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
  const fields = ['No','No. Journal', 'Date', 'Created', 'Action']
  

const JournalEntry = () => {
    return (
        <>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            <CButton color="primary" className="px-4 my-3">CREATE NEW</CButton>
              <h4>List Data</h4>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              },
              {
                'Action':
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