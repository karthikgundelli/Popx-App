import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Account from './pages/Account'
import Login from './pages/Login'


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Welcome />} />
<Route path='/register' element={<Register />} />
<Route path='/login' element={<Login />} />
<Route path='/account' element={<Account />} />
</Routes>
</BrowserRouter>
)
}