import React from 'react';
//import React, {Component} from 'react';
import MyComponent from './MyComponent';
import './App.css'

const App = () => {
  return <MyComponent />;
}

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

/*function App(){
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color:'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  };
  return <div style={style}>{name}</div>
}*/

/*function App(){
  const name = 'react';
  return(
    <>
      <div class="react">{name}</div>
      <input />
    </>
  )

}*/

export default App;
