import React from 'react'
import { Switch , Route } from 'react-router-dom'
import Store from './pages/Store'
import Cart from './pages/Cart'


const Content = () => {
  return (
    <Switch>
        <Route exact path="/cart" component={ Cart } />
        <Route  path="/" component={ Store }/>
    </Switch>
  )
}

export default Content