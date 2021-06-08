import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 
  class Main extends React.Component{
//     $.ajax('./component/data.json)
//     .then(data=>{}



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