import React from 'react';
import './App.css'

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

function App(){
  const name = 'react';
  return(
    <>
    {/* 주석작성법 */}
      <div class="react">{name}</div>
      <input />
    </>
  )

}

export default App;
