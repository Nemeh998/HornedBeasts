import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component{

    constructor(props) {
        super(props);

    }
    render(){
        return (
 <div>
         <Modal show={this.props.activeModal}  alt={this.props.title} onHide={this.props.closeModal}>
          <Modal.Title>{this.props.title}</Modal.Title>
          <Modal.Body> 
            <img src={this.props.src} alt={this.props.keyword} title={this.props.title} style={{ width: '100%' }} />
            
            
           😸 Number of Taken Tuna: {this.props.clickonbutton}
           
             ❤ : {this.props.numberclick}
            
             <p>{this.props.description}</p>
           </Modal.Body>
           <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
                         </Button>  
      
           </Modal.Footer>
         </Modal> 
      </div>
        )
}}


export default SelectedBeast;