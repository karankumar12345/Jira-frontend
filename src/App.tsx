import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './page/sign-up'
import SignIn from './page/sign-in'
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/sign-in" element={<SignIn/>} />
    <Route path="/sign-up" element={<SignUp/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}
export default App
