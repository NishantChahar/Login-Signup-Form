// import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './componenets/login-signup/login';
import Register from './componenets/login-signup/register';
import Not_found from './componenets/not_found';
import Profile from './componenets/myprofile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
