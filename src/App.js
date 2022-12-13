import React,{Component} from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

import Header from './Component/Header'
import India from './Component/India'
import World from './Component/World'
import FlushExample from './FlushExample'


class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className='container-fluid' >
       <Header/>
       
        <Router>
        
        
        <Routes>
          <Route exact path = "/" element={<India/>} />
          <Route  path = "/india" element={<India/>} />
          <Route  path = "/world" element={<World/>} />
  
  </Routes>
  </Router>

      </div>
      
    )
  }
}



export default App;
