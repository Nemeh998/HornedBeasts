import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 
// import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
  class Main extends React.Component{
   

    // filter:() => {
    //   this.setState({})

render(){
 
  // console.log(this.props);  
  
return(
  <div>
    {
 Data.map((beast)=>{
   return (
  <div>
     {/* <Form>
          <Form.Label>Filter By Horns</Form.Label>
          <Form.Control >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>100</option>
          </Form.Control>
        </Form> */}
     <HornedBeast 
     title={beast.title}
     img={beast.image_url}
     description={beast.description}
     keyword={beast.keyword}
     />
     </div>
   )
 })
}
</div>


)
}
}
  export default Main;