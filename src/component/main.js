import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 
import Modal from 'react-bootstrap/Modal'
  class Main extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: 'Frankie',
          
    //         numberOfTunainCabinet: 15
    //     }
    // }

    // giveTuna = () => {
    //     this.setState({
    //         numberOfTunainCabinet: this.state.numberOfTunainCabinet -1
    //     })
    // }
_______________________________________




render(){
 
  console.log(this.props);  
  
return(
  <div>
    {
 Data.map((beast)=>{
   return (
  
     <HornedBeast 
     title={beast.title}
     img={beast.image_url}
     description={beast.description}
     keyword={beast.keyword}
     />
   )
 })
}
</div>


)
}
}
  export default Main;