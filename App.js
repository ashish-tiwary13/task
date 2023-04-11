import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import {Animated,FadeInUp, FadeOutUp } from "react-native-reanimated";

export default function App() {
  const [pressed, setPressed] = useState(false);
  const [color, setColor] = useState(false);

  handlePress = () => {
    if(!pressed) {
      setPressed(true);
      setColor(true);
    } else {
      setPressed(false);
      setColor(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={[styles.button,{backgroundColor: `${!color?"white":"grey"}`,}]}><Text style={{color: `${color?"white":"black"}`,fontWeight:800}}>Sample Button</Text></TouchableOpacity>
      {pressed?
       <View style={styles.textBox}>
        {/* <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
        > */}
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        {/* </Animated.View> */}
       </View>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 5,
    width: "50%",
    alignItems: 'center',
  },
  textBox: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    padding: 20,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
   },
});
