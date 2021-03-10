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



const Sales = () => {
  const usersData = [
    {id: 0, date: '2021-02-17', number: '123456', customer: 'PT. Phen', duedate: '2021-02-28', status: 'Pending', balancedue:'20000', total:'20000'},
    {id: 1, date: '2021-02-01', number: '125476', customer: 'PT. Test', duedate: '2021-02-18', status: 'Active', balancedue:'20000', total:'20000'},
  ]

  const fields = [
    { key: 'date',},
    'number',
    { key: 'customer',},
    { key: 'duedate', label: 'Due Date', },
    'status',
    { key: 'balancedue', label: 'Balance Due'},
    { key: 'total', label: 'Total'}
  ]

  const getBadge = (status)=> {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

    return (
      <>
        <CRow>
          <CCol sm="3">
            <CCard>
              <CCardHeader color='warning'>
              Open Invoices
              </CCardHeader>
              <CCardBody>
                Rp. 0,00
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="3">
            <CCard>
              <CCardHeader>
              Overdue Invoices
              </CCardHeader>
              <CCardBody>
               Rp. 0,00
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="3">
            <CCard>
              <CCardHeader>
              Payments Received Last 30 Days
              </CCardHeader>
              <CCardBody>
                Rp. 0,00
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
        <CCol sm="12">
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol sm='2'>Sales Transactions</CCol>
                  <CCol sm='10'>
                    <CButton color="primary" className="px-4 right" size='sm'>Import</CButton>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  columnFilter
                  tableFilter
                  footer
                  itemsPerPageSelect
                  itemsPerPage={5}
                  hover
                  sorter
                  pagination
                  scopedSlots = {{
                    'status':
                      (item)=>(
                        <td>
                          <CBadge color={getBadge(item.status)}>
                            {item.status}
                          </CBadge>
                        </td>
                      ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>
      </>
    )
}

export default Sales
