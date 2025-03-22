import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MiniKitProvider from './minikit-provider';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/home/Home';
import Kyc from './pages/kyc/Kyc';
import Wallet from './pages/wallet/Wallet';
import './index.css';

function App() {
  return (
    <MiniKitProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MiniKitProvider>
  );
}

export default App;