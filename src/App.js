import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Home/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import About from './Pages/About/About';
import Details from './Pages/Details/Details/Details';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/details/:serviceId">
                <Details></Details>
              </PrivateRoute>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
