import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PokemonPage from './PokemonPage';

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <PokemonPage />
          </Route>
          <Route>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
