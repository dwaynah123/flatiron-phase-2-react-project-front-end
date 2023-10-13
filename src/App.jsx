import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
// import NavBar from "./components/NavBar"
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from "./components/NavBar"


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
