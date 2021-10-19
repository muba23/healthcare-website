import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Home/Footer/Footer';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
