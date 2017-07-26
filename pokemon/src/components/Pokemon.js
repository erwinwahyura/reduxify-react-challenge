import React from 'react'
import EPokemon from 'pokedex-promise-v2'
import Bulma from 'bulma/css/bulma.css'
import Axios from 'axios'
import { Provider } from 'react-redux'

import store from '../stores'
import { connect } from 'react-redux'
import { PokemonGetter } from '../actions'
import logo from '../logo.svg'


const Pokemon = (props) => {

  //is  redux
  return (
  <Provider store={store}>
    <div>
      <h1>Are Your Caught a Pokemon ? : {props.currentPokemon.StorePokedex}</h1>
      <button onClick={() => props.ThrowPokeBall()}> THROW YOUR POKEBALL!</button>
      <hr/>
      <div className="box">
        <nav className="panel">
          <p className="panel-heading">
            Data Pokemon
          </p>
          <a className="panel-block is-active">
            <span className="panel-icon">
              <i className="fa fa-book"></i>
            </span>
            POKEMON NAME : {props.currentPokemon.name}
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-book"></i>
            </span>
            {props.abilities === undefined
            ?
            props.currentPokemon === "wait"
            :
            (props.currentPokemon === "wait"
            ?
            <img src={logo} className="App-logo" alt="logo"/>
            :
            <div>
              {props.abilities.map((x, i) => {
                return (
                  <p key={i}>ABILITIES : {x.ability.name} </p>
                )
              })}
            </div>
            )
            }

          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-book"></i>
            </span>
            minireset.css
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-book"></i>
            </span>
            jgthms.github.io
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-code-fork"></i>
            </span>
            daniellowtw/infBoard
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fa fa-code-fork"></i>
            </span>
            mojs
          </a>
        </nav>
      </div>

    </div>
  </Provider>
  )
}
//store
const mapStateToProps = (state) => {
  console.log('ini map : ', state);
  return {
    currentPokemon: state.getStorePokedex.StorePokedex,
    abilities: state.getStorePokedex.StorePokedex.abilities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ThrowPokeBall: () => dispatch(PokemonGetter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
