import Basket from './components/basket/Basket';
import Header from './components/header/Header';
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
          <Basket />
        </main>
      </body>
    </div>
  );
}

export default App;
