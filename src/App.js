import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditCompany } from './EditCompany/EditCompanyPage';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/editcompany" element={<EditCompany />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
