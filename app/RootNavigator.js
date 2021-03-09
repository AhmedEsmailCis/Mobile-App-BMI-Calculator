import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BmiCalculatorScreen from './BmiCalculatorScreen';
import ResultScreen from './ResultScreen';
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
