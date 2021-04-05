// import third-party components
import { Route, Switch } from 'react-router-dom'

// import owned components

import Homepage from './pages/homepage/Homepage';
import List from './components/counter'

// import css files
import './App.css';

function App() {
  return (
    <main className="App">
      <header>
      
      </header>
      <div className="body-container">
        <Switch>
          <Route path ="/" component={Homepage} exact />
          <Route path ="/" component={List} exact />
          
          
        </Switch>
      </div>
    </main>
  );
}

export default App;
