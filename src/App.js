import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditCompanyPage } from './EditCompany/EditCompanyPage';
import { ClientListPage } from './ClientList/ClientListPage';
import { ManageInvoicesPage } from './ManageInvoices/ManageInvoicesPage';
import { GSTExpensesPage } from './GSTExpenses/GSTExpensesPage';
import { TaxSummaryPage } from './TaxSummary/TaxSummaryPage';
import { Navbar } from './Navbar';
import { AssetsPage } from './Assets/AssetsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/editcompany" element={<EditCompanyPage />}></Route>
            <Route path="/clientlist" element={<ClientListPage />}></Route>
            <Route path="/manageinvoices" element={<ManageInvoicesPage />}></Route>
            <Route path="/gstexpenses" element={<GSTExpensesPage />}></Route>
            <Route path="/assets" element={<AssetsPage />}></Route>
            <Route path="/taxsummary" element={<TaxSummaryPage />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
