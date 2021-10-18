import './App.css';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import Header from './components/Header';
import Home from './components/home/HomeContainer';

function App() {
  const store = generateStore();
  return (
    <Provider store={store} >
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
