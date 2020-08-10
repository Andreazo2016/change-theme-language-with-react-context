import React from 'react';
import ContextApplication from './context';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ContextApplication>
      <>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
      </>
    </ContextApplication>

  );
}

export default App;
