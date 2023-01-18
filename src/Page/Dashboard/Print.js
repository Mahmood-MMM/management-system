import { Component } from "react"
import ReactToPrint from "react-to-print"

function printTable({employees,setEmployees}) {

  return (
    <ReactToPrint
      trigger={() => {
        return <button>Print the table</button>
      }}
      content={() => this.componentRef}
      documentTitle='new document'
      pageStyle='print'
    />
  )
}

export default printTable