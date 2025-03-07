import './App.css';
import React, { Component } from 'react'
import Home from './Components/Home';
import Actor from './Components/Actor';
import Films from './Components/Films';
import Location from './Components/Location';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='actor' element={<Actor />} />
        <Route path='films' element={<Films />} />
        <Route path='location' element={<Location />} />
      </Routes>
    )
  }
}
