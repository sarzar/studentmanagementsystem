import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home page/Home";
import Students from "./Components/Students Page/Students";
import Courses from "./Components/Courses Page/Courses";
import Results from "./Components/Results Page/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>

          <Routes>
              <Route path="/" element={<Navbar/>}>
                  <Route index element={<Home/>}/>
                  <Route path="Students" element={<Students/>}/>
                  <Route path="Courses" element={<Courses/>}/>
                  <Route path="Results" element={<Results/>}/>
              </Route>
          </Routes>
        
        </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
