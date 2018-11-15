import React, { Component } from 'react';
import Photography from './Components/Photography';
import Particles from 'react-particles-js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles params={{
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
                backgroundColor: "#000100",
                top: 0,
    			display:'block',
    			position: 'fixed',
    			zIndex: '-1',
   				 height: '100%',
              }}
            />
      	<h1>React Image Gallery</h1>
      	<div className="photography-body"><Photography/></div>
      </div>
    );
  }
}

export default App;
