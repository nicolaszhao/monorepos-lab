import React from 'react';
import { render } from 'react-dom';
import ModA from '@nicolaz/mod-a';

function App() {
  return <h1>Pro B and import {ModA()}.</h1>;
}

render(<App />, document.getElementById('root'));