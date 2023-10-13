import Header from './components/Header'
import Posts from './components/Posts'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <HashRouter>
        <Header />
      </HashRouter>
      <Posts />
      <Footer />
    </>
  )
}

export default App
