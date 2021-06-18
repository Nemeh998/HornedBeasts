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
          // console.log(beast.horns,"beat");
          // console.log(Data);
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
      let searchValue = parseInt(e.target.value);
    
      this.setState({ searchHorn: searchValue },
  
         this.filterData);
    }



render(){
 
  console.log(this.props);  
  
return(
 
  <div>
     <SelectedBeast

  handleHorns={this.handleHorns}
/>
{this.state.hBArray.map(beast => {
   return (
    console.log(this.state.hBArray,"the Array number"),
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