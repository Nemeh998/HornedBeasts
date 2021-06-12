import React from 'react';
import HEDAER from './component/HEADER';
import Main from './component/main';
import Footer from './component/Footer';

class App extends React.Component {



  updateAllBeasrs=(allBeasts)=>{

    this.setState({allBeasts})
  }
  render() {
    return (
 <div>
 <HEDAER />
  <Main 
  updateAllBeasrs={this.updateAllBeasrs}
  
  />
  <Footer />
       </div>

    )
  }
}


export default App;