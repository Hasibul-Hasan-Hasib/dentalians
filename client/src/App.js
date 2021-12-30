import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registation from './components/Registation/Registation';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registation></Registation>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='*'>
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
