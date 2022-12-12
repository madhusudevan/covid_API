import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Statedata from './Statedata'
import axios from 'axios'
export class India extends Component {
  constructor(){
    super()
    this.state={
      data:{}
    }
  }
  componentDidMount(){
    axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then((response)=>{
      this.setState({data:response.data})
    })
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <img style={{width:50 ,height:30}} src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"/>
            <h3>INDIA</h3>
             </div>
          <div className='col-md-12'>
          
            <div className='row'>
              <div className='col-md-3'>
              <Card className='badge bg-primary' style={{ width: '14rem' }}>
      <Card.Body className='text-center' >
        <Card.Title>TOTAL CASES</Card.Title>
        <h3>{this.state.data.totalCases}</h3>
        <Card.Text>

        </Card.Text>
      </Card.Body>
    </Card>
    <div className='col-md-12'>
              <Statedata/>
            </div>
              </div>
              <div className='col-md-3'>
              <Card className='badge bg-warning' style={{ width: '14rem' }}>
      <Card.Body className='text-center' >
        <Card.Title>ACTIVE CASES</Card.Title>
        <h3>{this.state.data.activeCases}</h3>
        <Card.Text>
         [Today : {this.state.data.activeCasesNew}]
        </Card.Text>
      </Card.Body>
    </Card>
              </div>
              <div className='col-md-3'>
              <Card className='badge bg-success' style={{ width: '14rem' }}>
      <Card.Body className='text-center' >
        <Card.Title>RECOVERED</Card.Title>
        <h3>{this.state.data.recovered}</h3>
        <Card.Text>
         [Today : {this.state.data.recoveredNew}]
        </Card.Text>
      </Card.Body>
    </Card>
              </div>
              <div className='col-md-3'>
              <Card className='badge bg-danger' style={{ width: '14rem' }}>
      <Card.Body className='text-center' >
        <Card.Title>DEATHS</Card.Title>
        <h3>{this.state.data.deaths}</h3>
        <Card.Text>
         [Today : {this.state.data.deathsNew}]
        </Card.Text>
      </Card.Body>
    </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default India