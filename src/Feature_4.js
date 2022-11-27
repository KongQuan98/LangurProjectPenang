import { useFonts, BungeeInline_400Regular } from "@expo-google-fonts/bungee-inline";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {Pressable, Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Feature_4({navigation}){

  //load BUNGEE Font
  let [loaded] = useFonts({
    BungeeInline_400Regular,
  });

  if (!loaded) {
    return null;
  }

  const onPressHandlerBack = () => {
    navigation.goBack();
  }
  
  return(
     <ImageBackground 
        style={styles.body}
        source={require('../assets/background.png')}
        resizeMode='stretch'
        imageStyle={{opacity: 0.5}}
      >
        <View style={styles.header}>
          <View style={styles.back_button}>
            <TouchableHighlight 
              onPress={onPressHandlerBack}
              style={{
                borderRadius: 20, 
                width: 35,
                height: 35,}}
              activeOpacity={0.5}
              underlayColor='#fff'
            >
              <Image 
                source={require('../assets/image/back.png')}
                style={styles.back_button_image} 
                resizeMode='stretch' 
              />
            </TouchableHighlight>
          </View>
        
          <Text style={styles.header_text}>
            Our Merchandise
          </Text>
          <View style={styles.empty_view}></View>
      </View>
    </ImageBackground> 
      
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },

    back_button: {
      flex: 1,
      marginLeft: 20,
    },

    back_button_image: {
      width: 35,
      height: 35,
    },

    header_text: {
      flex: 8,
      fontSize: 20,
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
    },

    empty_view:{
      flex: 1,
    }
})