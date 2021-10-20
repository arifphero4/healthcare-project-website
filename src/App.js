import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import SignUp from './Signup/SignUp';
import ResetPassword from './ResetPassword/ResetPassword';
import Details from './components/Home/Details';
import { createContext } from 'react';
import useFetch from './hooks/useFetch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const useServices = createContext();

function App() {
  const [details] = useFetch();
  return (
    <useServices.Provider value={[details]}>
      
      <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/services">
                <Services></Services>
              </Route>
            
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/signup">
                <SignUp></SignUp>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/reset">
                <ResetPassword></ResetPassword>
              </Route>
              <PrivateRoute exact path="/details/:id">
                <Details></Details>
              </PrivateRoute>
              <Route exact path="*">
                <Error></Error>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
      

      
      
    </useServices.Provider>
  );
}

export default App;
