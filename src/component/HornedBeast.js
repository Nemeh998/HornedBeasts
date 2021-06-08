import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
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
        // this.props.giveMeTuna();
    
      }
  
render() {
  console.log(this.props);
  return (
   
     <div>
  

<Card style={{ width: '18rem' }}>
  <Card.Img onClick={this.increaseNumberOfPets}variant="top" src={this.props.img} alt={this.props.title}/>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤ : {this.state.numberclick}
            </Card.Text>
            <Card.Text>
            😸 Number of Taken Tuna: {this.state.clickonbutton}
            </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button onClick={this.needTuna} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    </div>
    

  )
          }
          }


          export default HornedBeast;