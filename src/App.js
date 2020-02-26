import React from 'react';

// components
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home';

// css
import './assets/css/App.css';
import 'bulma/css/bulma.css'

//font
import '../node_modules/font-awesome/css/font-awesome.css'

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
