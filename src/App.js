import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeApp from './components/Home';
import About, { Service as ServiceApp } from './components/About';

function App() {

  const data = [
    { nama: "nando" },
    { nama: "rio" },
  ]
  // => {} perlu return
  // => data

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path='/' element={<HomeApp />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<ServiceApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
