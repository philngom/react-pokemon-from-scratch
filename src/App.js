import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PokemonPage from './PokemonPage';
import PokemonDetail from './PokemonDetail';

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <PokemonPage />
          </Route>
          <Route exact path='./pokemon/:id'>
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
