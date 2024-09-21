import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import image from './assets/diamon_red.jpg';

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello world!</Text>
      <Image style={style.image} source={image}/>
      <TouchableOpacity 
        onPress={()=> Alert.alert('Hola!')}
        style={style.button}
      >
        <Text style={style.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};
// hola carlitos
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929'
  },
  title: { fontSize: 30, color: '#fff' },
  image: { height:200, width:200, borderRadius: 100},
  button: { 
    backgroundColor: 'blue', 
    padding: 10,
    marginTop: 10,
    height:80, width:80, borderRadius: 40
  },
  buttonText:{
    color:'#fff',
    fontSize: 20,
  }
});

export default App;
