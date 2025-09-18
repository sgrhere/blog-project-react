import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog/:id' element={<SingleBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
