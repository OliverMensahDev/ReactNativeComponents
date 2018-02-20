import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
//Register Screens 
Navigation.registerComponent("loginSwitch.AuthScreen", () => AuthScreen)
Navigation.registerComponent("loginSwitch.SharePlace", () => SharePlace)
Navigation.registerComponent("loginSwitch.FindPlace", () => FindPlace)

//start the app 
Navigation.startSingleScreenApp({
  screen:{
    screen: "loginSwitch.AuthScreen",
    title: "Login"
  }
})
