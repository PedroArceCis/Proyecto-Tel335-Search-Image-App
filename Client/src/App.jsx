import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import SamplesPage from './pages/SamplesPage'
import NewSample from './pages/NewSample'
import { Navbar } from './components/Navbar'
import ExamplePage from './pages/ExamplePage'
import SampleIDPage from './pages/SampleIDPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/samples" element={ <SamplesPage/> } />
        <Route path="/samples/:id" element={ <SampleIDPage/> } />
        <Route path="/new-sample" element={ <NewSample/> } />
        <Route path="/example" element={ <ExamplePage/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
