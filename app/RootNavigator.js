import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BmiCalculatorScreen from './screens/BmiCalculatorScreen';
import ResultScreen from './screens/ResultScreen';
const RootNavigator = createStackNavigator({
  BmiCalculator: {
    screen: BmiCalculatorScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Result: {
    screen: ResultScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(RootNavigator);
