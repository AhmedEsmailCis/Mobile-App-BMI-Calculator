const initialState = {
  sexType: true,
  ageValue: 20,
  heightValue: 170,
  weightValue: 70,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "setWeight":
      return { ...state, weightValue: action.weightValue };
    case "setAge":
      return { ...state, ageValue: action.ageValue };
    case "setSexType":
      return { ...state, sexType: action.sexType };
    case "setHeight":
      return { ...state, heightValue: action.heightValue };
    default:
      return state;
  }
};
