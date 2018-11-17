import React from 'react'
import { Table, Segment} from 'semantic-ui-react'

const MyTable = ({headers, rows}) => {

  if (headers !== undefined) {
    const headerComponent = headers.map((header) => {
      return <Table.HeaderCell>{header}</Table.HeaderCell>
    })

    let headerKeys = Object.keys(rows[0])
    let newHeaderKeys = headerKeys.filter(key => key !== 'id')

    let rowsComponents = rows.map((row) => {
      let newRow = row
      delete newRow.id
      delete newRow.user_id
      delete newRow.created_at
      delete newRow.updated_at
      let rowValues = Object.values(newRow)
      let components = rowValues.map(value => <Table.Cell>{value}</Table.Cell> )
      return <Table.Row key={Math.random()*1000000} > {components} </Table.Row >

    })
    return(
      <div>
        <Segment basic>
        <Table basic='very' unstackable fixedheader='false' style={{ width: "auto", tableLayout: "auto" }} >
         <Table.Header>
           <Table.Row >
             {headerComponent}
           </Table.Row>
         </Table.Header>

         <Table.Body>
          {rowsComponents}
         </Table.Body>
        </Table>
        </Segment>
      </div>
    )

  } else {
    return <div></div>
  }

}

export default MyTable
