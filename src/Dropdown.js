import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {database} from 'firebase'
import firebase from 'firebase'
// countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

const career = [
    {key:'1',value:'Sale',text:'งานขาย'},
    {key:'2',value:'Ads',text:'งานโฆษณา'},
    {key:'3',value:'Finance',text:'งานบัญชี'},
    {key:'4',value:'Design',text:'งานออกแบบ'},
    {key:'5',value:'IT',text:'งานไอที'},
    {key:'6',value:'Service',text:'งานบริการลูกค้า'}
]

const DropdownExampleSearchSelection = () => (
  <Dropdown placeholder='Select career' fluid search selection options={career} />
)

export default DropdownExampleSearchSelection