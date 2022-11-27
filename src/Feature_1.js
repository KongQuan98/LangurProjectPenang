import { useFonts, BungeeInline_400Regular } from "@expo-google-fonts/bungee-inline";
import React from "react";
import {Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';
import Swiper from 'react-native-swiper';
import { Video } from 'expo-av';

export default function Feature_1({navigation}){

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
  
  return(
     <ImageBackground 
        style={styles.body}
        source={require('../assets/background.png')}
        resizeMode='stretch'
        imageStyle={{opacity: 0.5}}
      >
        <ScrollView>
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
            <Text style={styles.header_text}>
              About The Langurs
            </Text>
            <View style={styles.empty_view}></View>
          </View>

          {/* Youtube video */}
          <View style={styles.youtubeBox}>
            <Text style={styles.title_text}>Dusky Langur</Text>
            <View style={styles.video}>
              <YoutubePlayer
                marginTop={10}
                borderRadius={15}
                height={180}
                width={280}
                play={false}
                videoId={'JJzWfCn6fpI'}
              />
            </View>
            <Text style={styles.subtitle_text}>Trachypithecus Obscurus</Text>
          </View>

          {/* General Information */}
          <View style={styles.generalbox}>
            <Text style={styles.general_text}>General Information</Text>
          </View>
          
          <Swiper 
            showsPagination={false} 
            showsButtons 
            height={'100%'}
            autoplay={true}
            autoplayTimeout={8}
          >
            <View style={styles.swipeItem}>
              <Text style={styles.swipeText}>Dusky Langur is a species of primate in the Cercopithecidae (<Text style={{color: 'purple', fontWeight: "bold"}}>Old World Monkey</Text>) family.</Text>
            </View>
            <View style={styles.swipeItem}>
              <Text style={styles.swipeText}>The Dusky Langur is a native primate species in <Text style={{color: 'purple', fontWeight: "bold"}}>Peninsular Malaysia</Text>, 
              <Text style={{color: 'purple', fontWeight: "bold"}}> Myanmar</Text> and <Text style={{color: 'purple', fontWeight: "bold"}}>Thailand</Text>.</Text>
            </View>
            <View style={styles.swipeItem}>
              <Text style={styles.swipeText}>The Dusky Langur is listed as <Text style={{color: 'purple', fontWeight: "bold"}}>Endangered</Text> (EN) in the IUCN Red List of Threatened Species.</Text>
            </View>
          </Swiper>

          {/* Facts & Characteristics */}
          <View style={styles.generalbox}>
            <Text style={styles.general_text}>Facts & Characteristics</Text>
          </View>
          
          <ImageBackground
            style={styles.factsbox}
            source={require('../assets/image/background_image_facts.jpg')}
            imageStyle={styles.backgroundimagestyle}
          >
            <View style={{flexDirection: "row", width: '100%', height: '100%'}}>
              <View style={{flex: 1,}}></View>
              <View style={{flex: 1.5, justifyContent: "center",}}>
                <Text style={styles.factsword}>Long tails for balancing purposes</Text>
                <Text style={styles.factsword}>Their eyes are surrounded by white patches that resemble eyeglasses</Text>
                <Text style={styles.factsword}>Dark gray body fur with white hair crowns</Text>
                <Text style={styles.factsword}>Creamy patch on its mouth</Text>
                <Text style={styles.factsword}>Presence of opposable thumbs for gripping or holding</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.factsbox2}
            source={require('../assets/image/background_image_facts_2.jpg')}
            imageStyle={styles.backgroundimagestyle2}
          >
            <View style={{flexDirection: "row", width: '100%', height: '100%'}}>
              <View style={{flex: 1, justifyContent: "center", borderRadius: 10}}>
                <Text style={styles.factsword2}>The new-borns of Dusky Langurs have <Text style={{color: '#ffaf7a', fontWeight: "bold"}}>
                  bright orange</Text> fur and <Text style={{color: '#f699cd', fontWeight: 'bold'}}>pink</Text> skin.
                The <Text style={{color: '#ffaf7a', fontWeight: 'bold'}}>orange</Text> fur begins to shed at second week after birth. 
                At around third week old, the <Text style={{color: '#999', fontWeight: 'bold'}}>black-greyish </Text> 
                hair starts to grow on the forehead, tail, and limbs of the baby. By fourth month old, the head and body
                are <Text style={{color: '#999', fontWeight: 'bold'}}>black-greyish</Text> with only the cheeks showing traces 
                of <Text style={{color: '#ffff00', fontWeight: 'bold'}}>yellow</Text>. After five months, the entire body will
                be <Text style={{color: '#999', fontWeight: 'bold'}}>black-greyish</Text> in colour, which grows darker as it 
                becomes a juvenile. The secondary layer of white-ish fluffy hair will only start growing at sixth month old.</Text>
              </View>
              <View style={{flex: 0.5,}}></View>
            </View>
          </ImageBackground>
            
          {/* Habitat & Behaviour */}
          <View style={styles.generalbox}>
            <Text style={styles.general_text}>Habitat & Behaviour</Text>
          </View>

          <View style={styles.habitatbox}>
            <Image
              style={styles.habitatimage}
              source={require('../assets/image/feature_1_image.jpg')}
            />
            <View style={styles.habitattextbox}>
              <Text style={styles.habitattext}>"Dusky Langur are arboreal animals. They rest, forage and feed in the tree canopies."</Text>
              <Text style={styles.habitattext}>"Dusky Langurs are often observed to consume unripe fruits and young leaves. Over 130 species of plants have been recorded as food plants of Dusky Langurs in Penang."</Text>
            </View>
            
          </View>

          <Swiper 
            height={'100%'}
            loop={false}
          >
            {/* first habitat video */}
            <View style={styles.habitatvideobox}>
              <View style={styles.habitatvideo}>
                <Text style={styles.habitatvideotitle}>Communication</Text>
                <Video
                  source={{uri: "https://gdurl.com/bUCo"}}
                  style={{ width: 280, height: 180 }}
                  resizeMode="contain"
                  useNativeControls
                />
                <Text style={styles.habitatvideocaption}>The alpha male makes a loud honking sound as an alarm call as a warning to his family of potential dangers like the presence of humans or predators, etc.</Text>
              </View>
            </View>

            {/* second habitat video */}
            <View style={styles.habitatvideobox}>
              <View style={styles.habitatvideo}>
                <Text style={styles.habitatvideotitle}>Grieving</Text>
                <Video
                  source={{uri: "https://gdurl.com/ZwIy"}}
                  style={{ width: 280, height: 180 }}
                  resizeMode="contain"
                  useNativeControls
                />
                <Text style={styles.habitatvideocaption}>A mother Dusky Langur displayed "grief" behaviour after losing her infant due to an accident. 
                 She was still holding her child when it was noticed two days later, but she gradually released go after that.</Text>
              </View>
            </View>

            {/* third habitat video */}
            <View style={styles.habitatvideobox}>
              <View style={styles.habitatvideo}>
                <Text style={styles.habitatvideotitle}>Mating</Text>
                <Video
                  source={{uri: "https://gdurl.com/GVUk"}}
                  style={{ width: 280, height: 180 }}
                  resizeMode="contain"
                  useNativeControls
                />
                <Text style={styles.habitatvideocaption}>When dusky langurs reach sexual maturity, they are ready to reproduce. 
                 The duration of mounting and copulation is between five to ten seconds.</Text>
              </View>
            </View>

            {/* fourth habitat video */}
            <View style={styles.habitatvideobox}>
              <View style={styles.habitatvideo}>
                <Text style={styles.habitatvideotitle}>Defense</Text>
                <Video
                  source={{uri: "https://gdurl.com/zaxd"}}
                  style={{ width: 280, height: 180 }}
                  resizeMode="contain"
                  useNativeControls
                />
                <Text style={styles.habitatvideocaption}>When there is a threat (such as a snake's presence), the Dusky Langurs will
                 defend their family by shaking or breaking the branch to scare the reticulated python away.</Text>
              </View>
            </View>

          </Swiper>

          <View style={{marginTop:30,}}></View>

        </ScrollView>
        
      

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

    header_text: {
      flex: 8,
      fontSize: 20,
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
    },

    empty_view:{
      flex: 1,
    },

    youtubeBox:{
      marginTop: 15,
      width: '90%',
      alignSelf: "center",
      alignItems: "center",
      backgroundColor: "#f3fadc",
      borderRadius: 20,
      borderColor: '#aaa',
      borderWidth: 2,
      opacity: 0.8,
      
    },

    title_text:{
      fontSize: 30,
      fontFamily: 'BungeeInline_400Regular',
    },

    subtitle_text:{
      fontSize: 14,
      fontFamily: 'BungeeInline_400Regular',
      marginBottom: 10,
    },

    generalbox:{
      marginTop: 15,
      marginLeft: 25,
      elevation: 5,
    },

    general_text:{
      fontFamily: 'BungeeInline_400Regular',
      fontSize: 17,
    },

    swipeItem: {
      height: 100,
      width: '100%',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#fff',
      opacity: 0.7,
    },

    swipeText: {
      marginLeft: 50,
      marginRight: 50,
      justifyContent: "center",
      textAlign: "justify",
      fontWeight: "bold"
    },

    factsbox:{
      width: '90%',
      height: 280,
      alignSelf: "center",
      opacity: 1
    },

    factsbox2:{
      width: '90%',
      height: 280,
      alignSelf: "center",
      opacity: 1,
      marginTop: 10,
    },

    factsword: {
      color: '#000',
      fontSize: 12,
      marginRight: 10,
      borderWidth: 2,
      textAlign: "center",
      padding: 5,
      borderRadius: 20,
      fontWeight: "bold",
      margin: 3,
      backgroundColor:'#ffffffa6',
    },

    factsword2: {
      color: '#fff',
      fontSize: 12,
      textAlign: "justify",
      marginLeft: 15,
      marginRight: 15,
      fontWeight: "bold",
      backgroundColor: '#0000004d',
      padding: 2,
      borderRadius: 5,
    },

    backgroundimagestyle: {
      width: '100%', 
 
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10, 
    },

    backgroundimagestyle2: {
      width: '100%', 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10, 
    },

    habitatbox:{
      flexDirection: "row",
      width: '90%',
      alignSelf: 'center',
    },

    habitatimage: {
      flex: 1,
      width: "100%",
      height: 240,
      borderRadius: 10,
    },

    habitattextbox:{
      flex: 1,
      width: "100%",
      height: 240,
      justifyContent: "center",
      alignItems: "center",
    },

    habitattext:{
      margin: 10,
      textAlign: "justify",
    },

    habitatvideobox:{
      height: '100%',
      width: '100%',
      marginTop: 10,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },

    habitatvideotitle:{
      fontFamily: "BungeeInline_400Regular",
      textAlign: "left",
    },

    habitatvideo:{
      width: '90%',
      alignSelf: "center",
      alignItems: "center",
      backgroundColor: "#f3fadc",
      borderRadius: 20,
      borderColor: '#aaa',
      borderWidth: 2,
      opacity: 0.8,
    },

    habitatvideocaption:{
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 50,
      textAlign: "justify",
    }
})