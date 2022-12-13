import React, { Component } from 'react'
import  axios  from 'axios'
import Accordion from 'react-bootstrap/Accordion';


 

class Statedata extends Component {
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


   

    return(
    
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
          {itm} -<span className='btn-dark p-1 mr-2'> Total Cases - {total_confirmed}</span><span className='btn-dark p-1 mr-2'> Active {total_active}</span> <span className='btn-dark p-1 mr-2'>Recovered {total_recover}</span><span className='btn-dark p-1 mr-2'> Deaths {total_deaths}</span>
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
    


    
   
    
        
    )
   }
  
    
   
    


    



}



  
  


export default Statedata