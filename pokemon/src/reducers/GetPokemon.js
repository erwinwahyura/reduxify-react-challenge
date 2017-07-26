const initialState = {
  StorePokedex: ""
}

export default (state= initialState, action) => {
  console.log('this is action: -> ', action);
  console.log('this is state: -> ', state);

  switch (action.type) {
    case 'getPokemon_PENDING':
      return {StorePokedex: "wait"}
      break;
      case 'getPokemon_REJECTED':
        return {StorePokedex: "Your Data is Rejected!"}
        break;
    case 'getPokemon_FULFILLED':
      return {StorePokedex: action.payload.data}
      break;
    default:
      return state
  }
}
