import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.scss";
import "./styles/header.scss";

function App() {
  return ( 
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
  
      </Routes>
      <Footer/>
    </Router>
   );
}

export default App;