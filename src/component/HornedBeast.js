import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Forme from './Forme'
import SelectedBeast from './SelectedBeast'
  class HornedBeast extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          numberclick: 0,
          clickonbutton :0
        }
      }
    
      increaseNumber = () => {
        this.setState({
          numberclick: this.state.numberclick + 1
        })
      }
    
      voit = () => {
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


<Card style={{ width: '18rem' }}>
<Card.Title>{this.props.title}</Card.Title>
<Card.Img onClick={this.increaseNumber}variant="top" src={this.props.img} alt={this.props.alt} title={this.props.title} />
<Card.Text>{this.props.description}</Card.Text>
  
    <Card.Text>
    ❤ : {this.state.numberclick}
            </Card.Text>
            <Card.Text>
            😸 Number of voit: {this.state.clickonbutton}
            </Card.Text>
    <Button onClick={this.voit} variant="primary">Voit</Button>
    <Button onClick={this.openModal} >Click here to see as a modal</Button>

</Card>
      <SelectedBeast
          activeModal={this.state.modalState}
          closeModal={this.closeModal}
          title={this.props.title}
          src={this.props.img}
          description={this.props.description}
          keyword={this.props.keyword}
        clickonbutton={this.state.voit}
        />
    </div>



);

}}



          export default HornedBeast;