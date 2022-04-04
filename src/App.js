import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Calculator from './Page/Calculator/Calculator'

const App = () =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/cal" element={<Calculator />}></Route>
            <Route path="*" element={<div>페이지 없당!</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
