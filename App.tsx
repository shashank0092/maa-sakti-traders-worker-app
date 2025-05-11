import {StyleSheet, Text, View} from 'react-native';

const App = () => {
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
