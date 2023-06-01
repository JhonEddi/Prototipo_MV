import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersList } from './components/UsersList';
import { EvaluationList } from './components/EvaluationList';
import { PricingPlans } from './components/Plans';
import { EmpList } from './components/EmpleList';
import { Login } from './components/Login';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/aspirant" element={<UsersList />} />
          <Route path="/evaluation" element={<EvaluationList />} />
          <Route path="/plans" element={<PricingPlans />} />
          <Route path="/emp" element={<EmpList />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
