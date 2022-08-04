import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/React-Portfolio/about" element={<About />} />
          <Route path="/React-Portfolio/contact" element={<Contact />} />
          <Route path="/React-Portfolio/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
