class BmiBrain {
  getDetails = (bmi) => {
    if (bmi >= 25) {
      return "you have a higher than normal weight , try to  exercise more .";
    }
    if (bmi > 18.5) {
      return "you have a normal body weight , Good job .";
    }
    return "you have a lower than normal weight , try to  eat a bit more .";
  };

  getResult = (bmi) => {
    if (bmi >= 25) {
      return "Over Weight";
    }
    if (bmi > 18.5) {
      return "Normal";
    }
    return "Under Weight";
  };
}
export default new BmiBrain();
