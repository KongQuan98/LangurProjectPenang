import React from "react";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight, Modal, Image} from "react-native";
import { useFonts, BungeeInline_400Regular } from "@expo-google-fonts/bungee-inline";
import { Audio } from "expo-av";

export default function Game_3_Score({route, navigation}){
    
    const{totalScore, mode} = route.params
    const [hardmode, setHardMode] = useState(false)

    const [currentSound, setCurrentSound] = useState();

    const playSound = React.useCallback(async () => {
      const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_start.mp3"));
      setCurrentSound(sound);
      await sound.playAsync();
    })

    useEffect(() => {
      return currentSound ? () => currentSound.unloadAsync() : undefined;
    }, [currentSound]);

    useEffect(() => {
      if(mode == "Hard"){
        setHardMode(true);
      }
    })
  
    //load BUNGEE Font
    let [loaded] = useFonts({
      BungeeInline_400Regular,
    });

    if (!loaded) {
      return null;
    };

    const onPressHandlerBack = () => {
      navigation.navigate('MainMenu');
    }

    const onPressRestart = () => {
      setTimeout(() => {
        navigation.navigate('Game_3');
      }, 500)
      
      playSound();
    }

    const onPressQuit = () => {
      setTimeout(() => {
        navigation.navigate('MainMenu');
      }, 500)
      
      playSound();
    }

    return(
      <ImageBackground 
        style={hardmode ? styles.bodyHard : styles.body}
        source={require('../assets/background.png')}
        resizeMode='stretch'
        imageStyle={{opacity: 0.5}}
      >
        <View style={{flex: 2, width: "100%", height: "100%"}}>
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
        </View>
        
        
        {/* Score Board */}
        <View style={hardmode ? styles.redbox : styles.bluebox}>
          <Text style={styles.scoreText}>Mode: {mode}{"\n\n"}Score{"\n"}{totalScore}/5</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-evenly", position: "absolute",}}>
          <TouchableHighlight
              style={styles.button1}
              activeOpacity={0.5}
              underlayColor='#fff'
              onPress={onPressRestart}
          >
            <Image 
              source={require("../assets/image/button_restart.png")}
              style={{width: 70, height: 70}}
            />
          </TouchableHighlight>
          
          <TouchableHighlight
              style={styles.button2}
              activeOpacity={0.5}
              underlayColor='#fff'
              onPress={onPressQuit}
          >
            <Image 
              source={require("../assets/image/button_quit.png")}
              style={{width: 70, height: 70}}
            />
          </TouchableHighlight>
        </View>
        <View style={{flex:2, justifyContent: "flex-end", alignItems: "center"}}>
        <ImageBackground
            source={require('../assets/image/dialog_box.png')}
            style={{width: 100, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 100, }}
            resizeMode='stretch'
          >
            <Text style={styles.dialogText}>Well done!</Text>
          </ImageBackground>

        </View>
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
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    bodyHard: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#555"
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
    
    redbox: {
      flex: 3,
      backgroundColor: '#FF000066',
      borderRadius: 15,
      paddingLeft: 15,
      paddingRight: 15,
      width: "80%",
      justifyContent: "center"
    },

    bluebox: {
      flex: 3,
      backgroundColor: '#0F4392CC',
      borderRadius: 15,
      paddingLeft: 15,
      paddingRight: 15,
      width: "80%",
      justifyContent: "center"
    },

    scoreText: {
      color: '#fff',
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 35,
    },

    imagebox:{
      flex: 3,
      alignItems: "center",
      justifyContent: "flex-end"
    },

    button2: {
      borderRadius: 70,
      width: 70,
      height: 70,
      marginLeft: 30,
    },

    button1: {
      borderRadius: 70,
      width: 70,
      height: 70,
      marginRight: 30,
      alignSelf: "center"
    },

    image:{
      width: 250,
      height: "100%",
    },

    dialogText: {
      color: '#000',
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 15,
      width: "80%"
    },
})