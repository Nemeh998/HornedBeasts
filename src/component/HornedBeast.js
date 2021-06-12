import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import SelectedBeast from  './component/SelectedBeast'

  class HornedBeast extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          numberclick: 0,
          clickonbutton :0
        }
      }
    
      increaseNumberOfPets = () => {
        this.setState({
          numberclick: this.state.numberclick + 1
        })
      }
    
      needTuna = () => {
        this.setState({
          clickonbutton: this.state.clickonbutton + 1
    
        }) 
    }
      
   


      openModal = () => {
        this.setState({ modalState: !(this.state.modalState) })
      }
    
      closeModal = () => {
        this.setState({ modalState: false })
      }
     
render() {
   

  return (
   
   
  
<div>
<Card style={{ width: '18rem' }} onClick={this.openModal}>
<Card.Title>{this.props.title}</Card.Title>
<Card.Img onClick={this.increaseNumberOfPets}variant="top" src={this.props.img} alt={this.props.alt} title={this.props.title} />
<Card.Text>{this.props.description}</Card.Text>
  
    <Card.Text>
    ❤ : {this.state.numberclick}
            </Card.Text>
            {/* <Card.Text>
          : {this.state.clickonbutton}
            </Card.Text> */}
   
    {/* <Button  >Click here to see as a modal</Button> */}

</Card>
      {/* <SelectedBeast
          activeModal={this.state.modalState}
          closeModal={this.closeModal}
          title={this.props.title}
          src={this.props.imageUrl}
          description={this.props.description}
          keyword={this.props.keyword}
        /> */}

<Modal show={this.state.modalState}  alt={this.props.title} onHide={this.closeModal}>
          <Modal.Title>{this.props.title}</Modal.Title>
          <Modal.Body> 
            <img src={this.props.img} alt={this.props.keyword} title={this.props.title} style={{ width: '100%' }} />
            <p>{this.props.description}</p>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
          </Button>
         
          </Modal.Footer>
        </Modal>


    </div>



);

}}



          export default HornedBeast;