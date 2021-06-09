import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 

import 'bootstrap/dist/css/bootstrap.min.css';
  class Main extends React.Component{
   



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