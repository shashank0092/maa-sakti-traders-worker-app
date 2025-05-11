import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={Style.container}>
      <Text>THIS IS TEXT</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
