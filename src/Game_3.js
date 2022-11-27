import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight, Image} from "react-native";
import { useFonts, BungeeInline_400Regular } from "@expo-google-fonts/bungee-inline";
import { Audio } from "expo-av";

export default function Game_3({navigation}){

    const [currentSound, setCurrentSound] = useState();

    const playSound = React.useCallback(async () => {
      const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_start.mp3"));
      setCurrentSound(sound);
      await sound.playAsync();
    })

    useEffect(() => {
      return currentSound ? () => currentSound.unloadAsync() : undefined;
    }, [currentSound]);

    //load BUNGEE Font
    let [loaded] = useFonts({
      BungeeInline_400Regular,
    });

    if (!loaded) {
      return null;
    }

    const onPressHandlerBack = () => {
      navigation.navigate('MainMenu');
    }

    const onPressHandler_easyMode = () => {
      setTimeout(() => {
        navigation.navigate('Game_3_EasyMode');
      }, 500)
      
      playSound();
    }

    const onPressHandler_hardMode = () => {
      setTimeout(() => {
        navigation.navigate('Game_3_HardMode');
      }, 500)
      
      playSound();
    }
  
    return(
      <ImageBackground 
        style={styles.body}
        source={require('../assets/background.png')}
        resizeMode='stretch'
        imageStyle={{opacity: 0.5}}
      >
        {/* Back Button */}
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
          <View style={{flex: 8}}></View>
          <View style={{flex: 1}}></View>
        </View>
        
        {/* Games Title */}
        <View style={styles.titlebox}>
          <Text style={styles.titletext}>Test{"\n"}your{"\n"}knowledge</Text>
        </View>
        
        {/* Games Menu Bar */}
        <View style={styles.menubox}>
          <Text style={styles.menutext}>Please select a mode</Text>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.5}
            underlayColor='#fff'
            onPress={onPressHandler_easyMode}
          >
            <Text style={styles.buttontext}>Easy Mode</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.5}
            underlayColor='#fff'
            onPress={onPressHandler_hardMode}
          >
            <Text style={styles.buttontext}>Hard Mode</Text>
          </TouchableHighlight>
        </View>

        {/* Langur Deco */}
        <View style={styles.imagebox}>
          <Image 
            source={require('../assets/image/langur_lecture.png')} 
            style={styles.image}
            resizeMode='stretch'
          />
        </View>
        
      </ImageBackground>
      
    )
}

const styles = StyleSheet.create({
  body: {
      flexDirection: "column",
      flex: 1,
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

    titlebox: {
      height: '10%',
      flex: 1.5,
      alignItems: "center",
      justifyContent: "center",   
    },

    titletext:{
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 40,
      color: '#fff',
      backgroundColor: '#0F4392',
      borderRadius: 15,
      paddingLeft: 15,
      paddingRight: 15,
      opacity: 0.85,
    },

    menubox:{
      flex: 1,
      alignItems: "center",
    },

    menutext: {
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 20,
    },

    buttontext:{
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 15,
      color: '#fff',
      backgroundColor: '#2C3E4C',
      borderRadius: 10,
      paddingLeft: 50,
      paddingRight: 50,
    },

    imagebox:{
      flex: 1.5,
      marginTop: 30,
      alignItems: "center",
    },

    image:{
      width: '70%',
      height: '100%'
    },

    button: {
      margin: 10,
      borderRadius: 10,
    }
    
})