import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Login from './pages/Login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/protectedRoute/protectedRoute'

function App() {

  return (
    <AuthProvider>
      <div className='App'>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/login' element={<Login />}/>

            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>}/>

            <Route path='/movies' element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>}/>

            <Route path='/movies/:id' element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>}/>

            <Route path='*' element={<Navigate to="/" replace />} />

          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
