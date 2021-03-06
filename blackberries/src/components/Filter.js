import React from 'react'
import {DropdownButton, Dropdown,ButtonGroup} from 'react-bootstrap'

import '../scss/components/Filter.scss'

function Filter() {
  return (
    <>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
  )}
</>
  )
}

export default Filter
