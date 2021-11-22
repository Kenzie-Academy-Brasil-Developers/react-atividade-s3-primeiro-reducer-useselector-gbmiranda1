const initialState = ["Banana", "Maçã", "Kiwi"];

const fruitsReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit] 
    default:
      return state;
  }
};

export default fruitsReducer;
