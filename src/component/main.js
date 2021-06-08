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

// function Example() {
//     const [show, setShow] = useState(false);
  
//     return (
//       <>
//         <Button variant="primary" onClick={() => setShow(true)}>
//           Custom Width Modal
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={() => setShow(false)}
//           dialogClassName="modal-100w"
//           aria-labelledby="example-custom-modal-styling-title"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-custom-modal-styling-title">
//               Custom Modal Styling
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>
//               Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
//               commodi aspernatur enim, consectetur. Cumque deleniti temporibus
//               ipsam atque a dolores quisquam quisquam adipisci possimus
//               laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
//               accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
//               reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
//               deleniti rem!
//             </p>
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }
  
//   render(<Example />);






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
     />
   )
 })
}
</div>


)
}
}
  export default Main;