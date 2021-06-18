import React from 'react';  
import HornedBeast from './HornedBeast'; 
import Data from './data.json'; 
import SelectedBeast from './SelectedBeast'
  class Main extends React.Component{
    constructor() {
      super();
      this.state = {
        count: 0,
        searchHorn: 0,
        hBArray: Data,
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
        this.setState({  hBArray: this.state.hBArray.filter(filterBeasts) });
      } else {
        this.setState({ hBArray: this.state.hBArray });
      }
    }
  
    handleHorns = (e) => {
      e.preventDefault()
      let searchValue = parseInt(e.target.value);
    
      this.setState({ searchHorn: searchValue },
  
         this.filterData);
    }

render(){

return(
 
  <div>
     <SelectedBeast

  handleHorns={this.handleHorns}
/>
{this.state.hBArray.map(beast => {
  
   return (
     <HornedBeast 
     title={beast.title}
     img={beast.image_url}
     description={beast.description}
     keyword={beast.keyword}
     horandBArray={this.state.hBArray}
     />
   
   )
 }
 )
}

</div>


)
}
}
  export default Main;