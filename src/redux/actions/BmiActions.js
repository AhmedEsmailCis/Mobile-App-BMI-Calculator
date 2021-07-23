export const setNumber = ({ Number, sectionLabel }) => {
  if (sectionLabel === "WEIGHT") {
    return { type: "setWeight", weightValue: Number };
  }
  return { type: "setAge", ageValue: Number };
};
export const setSexType = ({ sexType }) => {
  return { type: "setSexType", sexType };
};
export const setHeight = ({ heightValue }) => {
  return { type: "setHeight", heightValue };
};
