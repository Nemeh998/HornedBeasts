import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 
import SelectedBeast from './SelectedBeast'
  class Main extends React.Component{
    constructor() {
      super();
      this.state = {
        count: 0,
        horandBArray: Data,
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
        this.setState({ horandBArray: this.state.horandBArray.filter(filterBeasts) });
      } else {
        this.setState({ horandBArray: this.state.horandBArray });
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
     horandBArray={this.state.horandBArray}
     />
   )
 })
}
</div>


)
}
}
  export default Main;