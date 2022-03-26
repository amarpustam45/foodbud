import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SingleRecipe from './Pages/SingleRecipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<SingleRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
