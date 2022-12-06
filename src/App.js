import './App.css';
import { Routes, Route } from "react-router-dom";
import More from './More';
import Product from './Product';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<More />} />
        <Route path='/Product/:id' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App;