import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
     <div className="w3-top">
  <div className="w3-bar w3-black w3-card w3-left-align w3-large">
    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onClick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
    <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</a>
    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</a>
    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 3</a>
    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</a>
  </div>


  <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
    <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
    <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
    <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
    <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 4</a>
  </div>
</div>
<div className="w3-row-padding w3-padding-64 w3-container">
  <div className="w3-content">
    <div className="w3-twothird">
      <h1>Lorem Ipsum</h1>
      <h5 className="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

      <p className="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div className="w3-third w3-center">
      <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
