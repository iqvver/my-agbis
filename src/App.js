import React from 'react';
import Header from './components/header/Header';
import BasketPageContainer from './views/basketPage/BasketPageContainer';
import ServicePageContainer from './views/servicePage/ServicePageContainer';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <Header />
        </header>
        <main>
          <ServicePageContainer />
          <BasketPageContainer />
        </main>
      </body>
    </div>
  );
}

export default App;
