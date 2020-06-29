import React from 'react';
import './App.css';
import Lang from './components/lang';
import Logo from './components/image';
import Intro from './components/intro';
import Content from './components/content';

const App = () => {
  return (
      <div className='container'>
        <div>
          <Lang/>
        </div>

        <div className='Logo'>
          <Logo/>
        </div>

        <div>
          <Intro/>
        </div>

        <Content/>
      </div>
  );
}

export default App;
