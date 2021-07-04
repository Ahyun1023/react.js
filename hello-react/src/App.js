import React from 'react';

/*function App() {
  const name = '리액트';
  return <div>{name == '리액트' && <h1>리액트입니다.</h1>}</div>
}*/

function App(){
  const name = undefined;
  /*retur name;*/
  return <div>{name || '리액트'}</div>
}

export default App;
