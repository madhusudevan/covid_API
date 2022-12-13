import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import  axios  from 'axios'
import Button from 'react-bootstrap/Button';
import 'bootstrap'

class  FlushExample extends Component {
  constructor(){
    super()
    this.state = {
        stateData : {}
    }
}
componentDidMount(){
    axios.get("https://data.covid19india.org/state_district_wise.json").then((response)=>{
         
        this.setState({stateData:response.data})
        console.log(response.data)
        
    })
}
  render(){
    let keys = Object.keys(this.state.stateData)
  
  
    return (

      <Accordion  defaultActiveKey="0">
      {
        keys.map((itm,ky)=>{
          let districts = this.state.stateData[itm].districtData
          let districts_keys = Object.keys(districts)
          let total_active  = 0
          let total_confirmed=0
          let total_recover=0
          let total_deaths=0

          let district_list = []

          for(let x in districts){

            total_active += districts[x].active

            total_confirmed += districts[x].confirmed
            total_recover += districts[x].recover
            total_deaths+= districts[x].deaths
            let ob = districts[x]
            ob["districts_name"] = x
            district_list.push(ob)
          }
          console.log(district_list)
          return(
            <Accordion.Item  eventKey={ky}>
      <Accordion.Header>
        {itm} - 
        <Button variant="secondary">Total Cases - {total_confirmed}</Button>{' '}
        <Button variant="secondary"> Active {total_active}</Button>{' '}
        <Button variant="secondary">Recovered {total_recover}</Button>{' '}
        <Button variant="secondary" className='ml-2'>Deaths {total_deaths}</Button>{' '}
        
      </Accordion.Header>
      <Accordion.Body  >
        <table className='table table-border-striped' >
          <thead>
            <tr>
              <td>District</td>
              <td>Confirmed</td>
              <td>Active</td>
              <td>Recovered</td>
              <td>Deaths</td>
            </tr>
          </thead>
          <tbody>
            {
              district_list.map((itm,ky)=>{
                return(
                  <tr>
                    <td>{itm.districts_name}</td>
                    <td>{itm.confirmed}</td>
                    <td>{itm.active}</td>
                    <td>{itm.deceased}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
    
       
      </Accordion.Body>
    </Accordion.Item>

          )
        }
        )
      }
    
   
  </Accordion>
    //   <div>
    // <Accordion defaultActiveKey="0" flush>
      

      
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>Accordion Item #1</Accordion.Header>
    //     <Accordion.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
    // </div>
  );
  }
}

export default FlushExample;