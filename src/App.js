import React from 'react';
import Footer from './components/footer/Footer';
import Promo from './components/promo/Promo';
//import BasketPageContainer from './views/basketView/BasketPageContainer';
//import ServicePageContainer from './views/serviceView/ServicePageContainer';

function App() {
  return (
    <>
      <Promo />
      {
        //<ServicePageContainer />
        //<BasketPageContainer />
      }
      <Footer />
    </>
  );
}

export default App;
