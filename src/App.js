import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exac path="/" element={<Home />} />
                    <Route exac path="/adduser" element={<AddUser />} />
                    <Route exac path="/edituser/:id" element={<EditUser />} />
                    <Route exac path="/viewuser/:id" element={<ViewUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
