import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'
import Details from './components/users/Details.jsx'
import Edit from './components/users/Edit.jsx'
function App() {
  return (
    <Routes>
      <Route path='/'/>
      <Route path='users/index' element={<Index/>}/>
      <Route path='users/create' element={<Create/>}/>
      <Route path='users/:id' element={<Details/>}/>
      <Route path='users/edit/:id' element={<Edit/>}/>

    </Routes>
  )
}

export default App