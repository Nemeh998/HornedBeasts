import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 
import Modal from 'react-bootstrap/Modal'
import SelectedBeast from './SelectedBeast'
  class Main extends React.Component{
    constructor() {
      super();
      this.state = {
        count: 0,
        hBArray: Data,
        searchHorn: 0,
      }
    }
  
    filterData = () => {
      const filterBeasts = (beast) => {
        if (beast.horns === this.state.searchHorn) {
          return true;
        }
        return false;
      }
  
      if (this.state.searchHorn) {
        this.setState({ hBArray: this.state.hBArray.filter(filterBeasts) });
      } else {
        this.setState({ hBArray: this.state.hBArray });
      }
    }
  
    handleHorns = (e) => {
      let searchValue = parseInt(e.target.value);
      this.setState({ searchHorn: searchValue }, this.filterData);
    }



render(){
 
  console.log(this.props);  
  
return(
 
  <div>
     <SelectedBeast

  handleHorns={this.handleHorns}
/>
    {
 Data.map((beast)=>{
   return (
  
     <HornedBeast 
     title={beast.title}
     img={beast.image_url}
     description={beast.description}
     keyword={beast.keyword}
     hBArray={this.state.hBArray}
     />
   )
 })
}
</div>


)
}
}
  export default Main;