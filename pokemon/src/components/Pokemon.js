import React from 'react'
import EPokemon from 'pokedex-promise-v2'
import Bulma from 'bulma/css/bulma.css'
import Axios from 'axios'
import { Provider } from 'react-redux'

import store from '../stores'
import { connect } from 'react-redux'
import { PokemonGetter } from '../actions'
import logo from '../logo.svg'
import Pokeball from '../Pokeball.png'


const Pokemon = (props) => {
  //is  redux
  const style = {
    text: {
      textAlign: 'left'
    }
  }
  return (
  <Provider store={store}>

      <div>
        {/* <h1>Are Your Caught a Pokemon ? : {props.pending.StorePokedex}</h1> */}
        <button onClick={() => props.ThrowPokeBall()}> THROW YOUR POKEBALL!</button>
        <hr/>
        {props.currentPokemon === ""
          ?
          "Ayo Lempar Pokeballmu \n Untuk dapatkan Pokemon Edisi Terbaru!!"
          :
          props.currentPokemon == "wait"
          ?
          <img src={Pokeball} className="App-logo2" alt="logo"/>
          :
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
                <div>
                  {/* IMAGE: <img src={props.currentPokemon.spirites.front_default}/> */}
                  IMAGE:
                  <img className="App-logoY" src={props.currentPokemon.sprites.front_default} alt="Image"/>
                  <img className="App-logoY" src={props.currentPokemon.sprites.back_default} alt="Image"/>
                  <img className="App-logoY" src={props.currentPokemon.sprites.front_shiny} alt="Image"/>
                  <img className="App-logoY" src={props.currentPokemon.sprites.back_shiny} alt="Image"/>
                </div>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fa fa-book"></i>
                </span>
                ABILITIES :
                <ul>
                  {props.currentPokemon.abilities.map((x, i) => {
                    return (
                      <ul style={style.text} key={i}>{x.ability.name}</ul>
                    )
                  })}
                </ul>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fa fa-book"></i>
                </span>
                STAT :
                <ul>
                  {props.currentPokemon.stats.map((x, i) => {
                    return (
                      <li style={style.text} key={i}>{x.stat.name} {x.base_stat}<br /></li>
                    )
                  })}
                </ul>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fa fa-book"></i>
                </span>
                MOVE :
                  <div>
                    <ul>
                {
                 props.currentPokemon.moves.slice(5, 10).map((x, i) => {
                  return (
                    <li style={style.text} key={i}>{x.move.name} </li>
                  )
                })}
                </ul>
              </div>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fa fa-book"></i>
                </span>
                WEIGTH : {props.currentPokemon.weight} KG
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fa fa-code-fork"></i>
                </span>
                TYPE :
                <div>
                  <ul>
                    {props.currentPokemon.types.map((x,i) => {
                      return (
                        <li style={style.text} key={i}>{x.type.name} </li>
                      )
                    })}
                  </ul>
                </div>

              </a>
            </nav>
          </div>
        }
      </div>
  </Provider>
  )
}
//store
const mapStateToProps = (state) => {
  console.log('ini map : ', state);
  return {
    currentPokemon: state.getStorePokedex.StorePokedex,
    abilities: state.getStorePokedex.StorePokedex.abilities,
    pending: state.getStorePokedex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ThrowPokeBall: () => {
      console.log('masuk sini');
      dispatch(PokemonGetter())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
