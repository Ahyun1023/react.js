import React from 'react';
//import React, {Component} from 'react';
import MyComponent from './MyComponent';
import './App.css'

const App = () => {
  return <MyComponent name="React" />
}

/*const App = () => {
  return <MyComponent />;
}*/

/*class App extends Component{
  render(){
    const name = 'react';
    return <div className="react">{name}</div>
  }
}*/

/*function App() {
  const name = '리액트';
  return <div>{name == '리액트' && <h1>리액트입니다.</h1>}</div>
}*/

export default App;
