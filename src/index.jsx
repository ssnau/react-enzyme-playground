import React from 'react';
import { render } from 'react-dom';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
var enzyme = require('enzyme');

chai.use(sinonChai);

class B extends React.Component {
	render() {
   return (
     <button className="x"> joke </button>
	 );
  }
}


var log = sinon.spy();
class App extends React.Component {
	render() {
		return (
		  <ul>
			  <li> <B /></li>
			  <li className="jo"> <B /></li>
			  <li id="wheel"> <B /></li>
			  <li> <B /></li>
			  <li> <button onClick={log}>real</button></li>
			</ul>
		)
	}
}
window.enzyme = enzyme;
window.wrapper = enzyme.shallow(<App />);
window.expect = expect;

render( <App/>, document.querySelector("#app"));
