import React, { Component } from 'react'
import axios from 'axios'

export class World extends Component {
  constructor(){
    super()
    this.state={
      data : []
    }
  }
  componentDidMount(){
    axios.get("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true").then((response)=>{
      this.setState({data:response.data})
      console.log(response.data)
    })
   }
  render() {
    return (
      <div className='row' >
        <div className='col-md-12'>
          <table className='table table-primary table-border table-striped' >
            <thead>
              <tr>
                <td>Country</td>
                <td>Total Cases</td>
                <td>Recovered</td>
                <td>Death</td>
              </tr>

            </thead>
            <tbody>
              {
                this.state.data.map((itm,ky)=>{
                  return(
                    <tr>
                      <td>{itm.country}
                  
                      
                    
                      </td>
                      <td>{itm.infected}</td>
                      <td>{itm.recovered}</td>
                      
                      <td>{itm.deceased}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default World