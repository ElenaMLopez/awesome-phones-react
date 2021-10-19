import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import generateStore from './redux/store';
import Header from './components/Header';
import Home from './components/home/HomeContainer';
import PhoneDetailContainer from './components/PhoneDetail/PhoneDetailContainer';

function App() {
  const store = generateStore();
  return (
    <Provider store={store} >
      <Router>
        <Header />
        <Route exact path='/phones' component={Home} />
        <Route exact path='/phones/detail/:id' render={(props) => ( 
          props.location.detailProps !== undefined 
          ? <PhoneDetailContainer {...props} />
          : <Redirect to='/phones' />
        )} />
      </Router>
    </Provider>
  );
}

export default App;
