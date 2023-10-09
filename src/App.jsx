import { useState } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  )
}

export default App
