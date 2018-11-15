import React, { Component } from 'react';
import Photography from './Components/Photography';
import Particles from 'react-particles-js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="canvas"><Particles params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: false,
            					color: "#3CA9D1",
            					blur: 12,
                				}
            			}
            		}
            	}}
              style={{
                backgroundColor: "#000100" 
              }}
            />
       </div>
      	<h1>React Image Gallery</h1>
      	<div className="photography-body"><Photography/></div>
      </div>
    );
  }
}

export default App;
