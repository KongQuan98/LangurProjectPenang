import React from "react";
import {Pressable, Text, View, StyleSheet} from "react-native";

export default function Game_2({navigation}){
    const onPressHandler = () => {
      navigation.navigate('MainMenu');
    }
  
    return(
      <View style={style.body}>
        <Text style={style.text}>
          Find the Langurs
        </Text>
        <Pressable 
          onPress={onPressHandler}
          style={({pressed}) => ({ backgroundColor: pressed ? '#ddd' : '#0f0'})}
        >
          <Text style={style.text}>
            Main Menu
          </Text>
        </Pressable>
      </View>
    )
}

const style = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
})