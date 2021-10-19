import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router";
import Header from "./components/Shared/Header/Header";
import Login from "./components/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Details from "./components/Details/Details";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Doctors from "./components/Doctors/Doctors";
import Success from "./components/Success/Success";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/doctor'>
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path='/success'>
              <Success></Success>
            </Route>
            <PrivateRoute path={"/details/:serviceId"}>
              <Details></Details>
            </PrivateRoute>
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
