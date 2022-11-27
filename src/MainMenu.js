import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useFonts, BungeeInline_400Regular } from '@expo-google-fonts/bungee-inline';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Audio } from "expo-av";

export default function MainMenu({navigation}) {

  const [name, setName] = useState('Kong Quan');
  const [currentSound, setCurrentSound] = useState();

  const playSound = React.useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_begin.mp3"));
    setCurrentSound(sound);
    await sound.playAsync();
  })

  useEffect(() => {
    return currentSound ? () => currentSound.unloadAsync() : undefined;
  }, [currentSound]);

  const onPressHandler_Feature_1 = () => {
    navigation.navigate('Feature_1');
  }

  const onPressHandler_Feature_2 = () => {
    navigation.navigate('Feature_2');
  }

  const onPressHandler_Feature_3 = () => {
    navigation.navigate('Feature_3');
  }

  const onPressHandler_Feature_4 = () => {
    navigation.navigate('Feature_4');
  }

  const onPressHandler_Game_1 = () => {
    navigation.navigate('Game_1');
  }

  const onPressHandler_Game_2 = () => {
    navigation.navigate('Game_2');
  }

  const onPressHandler_Game_3 = () => {
    setTimeout(() => {
      navigation.navigate('Game_3');
    }, 500)
    playSound();
  }

  //load BUNGEE Font
  let [loaded] = useFonts({
    BungeeInline_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return ( 
    
        <ImageBackground 
          style={styles.container}
          source={require('../assets/background.png')}
          resizeMode='stretch'
        >
          <StatusBar style=''/>
          <View style={styles.header}>
            <Text style={styles.title}>WELCOME {name}</Text>
            <Image 
              source={require('../assets/image/Langur-Project-Penang_opt1.png')}
              style={styles.logo}
              resizeMode='stretch'
            />
          </View>

          <View style={styles.middle}>
            <View style={styles.each_button}>
              <TouchableHighlight
                style={styles.button}
                onPress={onPressHandler_Feature_1}
                activeOpacity={0.8}
                underlayColor='#000'
              >
                <Image 
                  source={require('../assets/image/main_menu_button_1.png')}
                  style={styles.button}
                />
              </TouchableHighlight>
              <Text style={styles.button_text}>
                About The Langurs
              </Text>
            </View>
            
            <View style={styles.each_button}>
              <TouchableHighlight
                style={styles.button}
                onPress={onPressHandler_Feature_2}
                activeOpacity={0.8}
                underlayColor='#000'
              >
                <Image 
                  source={require('../assets/image/main_menu_button_2.png')}
                  style={styles.button}
                />
              </TouchableHighlight>
              <Text style={styles.button_text}>
                Tips & Hints
              </Text>
            </View>
            <View style={styles.each_button}>
              <TouchableHighlight
                style={styles.button}
                onPress={onPressHandler_Feature_3}
                activeOpacity={0.8}
                underlayColor='#000'
              >
                <Image 
                  source={require('../assets/image/main_menu_button_3.png')}
                  style={styles.button}
                />
              </TouchableHighlight>
              <Text style={styles.button_text}>
                About Us
              </Text>
            </View>
            <View style={styles.each_button}>
              <TouchableHighlight
                style={styles.button}
                onPress={onPressHandler_Feature_4}
                activeOpacity={0.8}
                underlayColor='#000'
              >
                <Image 
                  source={require('../assets/image/main_menu_button_4.png')}
                  style={styles.button}
                />
              </TouchableHighlight>
              <Text style={styles.button_text}>
                Our Merchandise
              </Text>
            </View>
          </View>

          <View style={styles.bottom}>
            <Text style={styles.title}>Fun Games</Text>

            <TouchableHighlight
              style={styles.long_button}
              onPress={onPressHandler_Game_1}
              activeOpacity={0.8}
              underlayColor='#000'
            >
              <ImageBackground
                source={require('../assets/image/games_button_1.png')}
                style={styles.long_button}
                imageStyle={{borderRadius: 20}}
              >
                <Text style={styles.long_button_title_left}>Connect the Bridges</Text>
                <Text style={styles.long_button_desc_left}>Help little dusky to cross the road by connecting bridges!</Text>
              </ImageBackground>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.long_button}
              onPress={onPressHandler_Game_2}
              activeOpacity={0.8}
              underlayColor='#000'
            >
              <ImageBackground
                source={require('../assets/image/games_button_2.png')}
                style={styles.long_button}
                imageStyle={{borderRadius: 20}}
              >
                <Text style={styles.long_button_title_right}>Find the Langurs</Text>
                <Text style={styles.long_button_desc_right}>Find all the hidden langurs in the forest within limited time</Text>
              </ImageBackground>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.long_button}
              onPress={onPressHandler_Game_3}
              activeOpacity={0.8}
              underlayColor='#000'
            >
              <ImageBackground
                source={require('../assets/image/games_button_3.png')}
                style={styles.long_button}
                imageStyle={{borderRadius: 20}}
              >
                <Text style={styles.long_button_title_left}>Test Your Knowledge</Text>
                <Text style={styles.long_button_desc_left}>Answer questions regarding Dusky Langur to see how well you know them!</Text>
              </ImageBackground>
            </TouchableHighlight>
            
          </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 75,
  },

  middle:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },

  bottom:{
    justifyContent: 'space-evenly',
    marginBottom: 90,
  },

  title: {
    width: 180,
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'BungeeInline_400Regular',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  each_button:{
    alignItems: 'center',
    margin: 7,
  },

  button: {
    width: 70,
    height: 70,
    borderRadius: 20,  
    elevation: 15,
  },

  button_text: {
    width: 70,
    fontSize: 10,
    textTransform: 'uppercase',
    fontFamily: 'BungeeInline_400Regular',
    textAlign: 'center',
  },

  long_button: {
    width: 320,
    height: 90,
    borderRadius: 20,
    marginBottom: 15,
    elevation:15,
  },

  long_button_title_left: {
    marginLeft: 20,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },

  long_button_desc_left: {
    width: 220,
    marginLeft: 20,
    marginTop: 5,
    fontSize: 12,
  },

  long_button_title_right: {
    textAlign: 'right',
    marginRight: 20,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },

  long_button_desc_right: {
    alignSelf: 'flex-end',
    width: 200,
    textAlign: 'right',
    marginTop: 5,
    marginRight: 20,
    fontSize: 12,
  }

});
