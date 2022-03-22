import { BrowserRouter } from 'react-router-dom';


import { Router } from './Router';
import NavBar from './ui/NavBar';

function App() {
  return (
    <div className="App">

      <BrowserRouter basename="/">
        <main>
          <NavBar />
          <div className="Prjmanager">
            <Router />
          </div>
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
