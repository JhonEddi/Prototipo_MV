import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersList } from './components/UsersList';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<UsersList />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
