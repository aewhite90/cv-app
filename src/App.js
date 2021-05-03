import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import {NoPrint} from './components/Utils/sharedStyle';

const App = () => {
  return (
    <div>
      <NoPrint>
        <Header />
      </NoPrint>
      <Content />
      <NoPrint>
        <Footer />
      </NoPrint>
    </div>
  );
}

export default App;
