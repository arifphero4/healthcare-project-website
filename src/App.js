import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DetailsService from './components/Home/DetailsService/DetailsService';
import Home from './components/Home/Home/Home';
import Hospital from './components/Hospital/Hospital/Hospital';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRouter/PrivateRouter';
import Register from './components/Login/Register/Register';
import NotPage from './components/NotPage/NotPage';
import AuthProvider from './contexts/AuthProvider';
import useFetch from './hooks/useFetch';

export const useServices = createContext();
function App() {
  const [services] = useFetch()

  return (
    <div className="App">
      <AuthProvider>
        <useServices.Provider value={[services]}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                  <Header/>
                <Home></Home>
                <Footer/>
              </Route>
              <Route path="/home">
                <Header />
                <Home />
                <Footer/>
              </Route>
              <PrivateRoute exact path="/details/:id">
                <Header/>
                <DetailsService />
                <Footer/>
              </PrivateRoute>
              <Route path="/login">
                <Header/>
                <Login />
                <Footer/>
              </Route>
              <Route path="/register">
                <Header/>
                <Register />
                <Footer/>
              </Route>
              <Route path="/hospital">
                <Header />
                <Hospital />
                <Footer/>
              </Route>
              <Route path="/doctors">
                <Header></Header>
                <Doctors/>
                <Footer></Footer>
              </Route>
              <Route path="*">
                <NotPage></NotPage>
              </Route>
            </Switch>
          </BrowserRouter>
        </useServices.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
