import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HornedBeast from './component/HornedBeast';  
import Form from 'react-bootstrap/Form';
class HEDAER extends React.Component{


              
    render() {
      return (
        
          <div >
            
           <h1>Horned Beast</h1>

           <Form>
          <Form.Label>Filter By Horns</Form.Label>
          <Form.Control onChange={this.props.handleHorns} as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>100</option>
          </Form.Control>
        </Form>
   
            
          </div>
    
    
      );
    }
    }
    export default HEDAER;