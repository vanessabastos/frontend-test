import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render() {

    return (
      <div id='home'>
        <div>
          <h3 id='welcome'>Bem vindos ao</h3>
          <h1 id='clubbi'>Clubbi</h1>
        </div>
        <p id='info'>Faça sua pesquisa em um dos itens abaixo!</p>
        <div id='link'>
          <Link to='actor' class="btn btn-primary">Actor</Link>
          <Link to='films' class="btn btn-primary">Films</Link>
          <Link to='location' class="btn btn-primary">Location</Link>
        </div>
      </div>
    )
  }
}
