import React from "react"
import { Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from "./components/NavBar"

//seperate components to different routes
//Home route and posts route
function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/posts">
        <Header />
        <Posts />
        <Footer />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </>
  )
}

export default App
