import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'

export default function MainRoutes_RotasPrincipais() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
        </Routes>
    )
}