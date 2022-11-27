import React from "react";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight, Modal, Image} from "react-native";
import { useFonts, BungeeInline_400Regular } from "@expo-google-fonts/bungee-inline";
import { Audio } from "expo-av";

export default function Game_3_EasyMode({navigation}){
    
    const [score, setScore] = useState(0);
    const [quizNum, setQuizNum] = useState(0);

    const [checkOption1, setCheckOption1] = useState(false);
    const [checkOption2, setCheckOption2] = useState(false);
    const [checkOption3, setCheckOption3] = useState(false);
    const [checkOption4, setCheckOption4] = useState(false);
    const [checkEmpty, setCheckEmpty] = useState(false);

    const [modal, setModal] = useState(false);
    const [correct, setCorrect] = useState(false);

    const [currentSound, setCurrentSound] = useState();

    const playCorrectSound = React.useCallback(async () => {
      const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_correct.mp3"));
      setCurrentSound(sound);
      await sound.playAsync();
    })

    const playWrongSound = React.useCallback(async () => {
      const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_wrong.mp3"));
      setCurrentSound(sound);
      await sound.playAsync();
    })

    const playWinSound = React.useCallback(async () => {
      const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_win.mp3"));
      setCurrentSound(sound);
      await sound.playAsync();
    })

    const playLoseSound = React.useCallback(async () => {
      const { sound } = await Audio.Sound.createAsync(require("../assets/sound/game_3_lose.mp3"));
      setCurrentSound(sound);
      await sound.playAsync();
    })

    useEffect(() => {
      return currentSound ? () => currentSound.unloadAsync() : undefined;
    }, [currentSound]);

    const questionaire = [
      {
        question: "What is the scientific name of the dusky langur?",
        option1: "Trachypithecus phayrei",
        option2: "Trachypithecus obscurus",
        option3: "Trachypithecus cristatus",
        option4: "Trachypithecus ebenus",
        correctAns: "Trachypithecus obscurus",
        explanation: "The scientific name of the dusky langur is Trachypithecus obscurus\n\n(the other choices are different species but under the same genus)"
      },
      {
        question: "80% of the world's food comes from rainforests.",
        option1: "True",
        option2: "False",
        option3: "",
        option4: "",
        correctAns: "True",
        explanation: "True!\n\nFruits, vegetables, rice, nuts, corn, fish… the list goes on and on."
      },
      {
        question: "Biodiversity in urban areas has a positive effect on our health.",
        option1: "True",
        option2: "False",
        option3: "",
        option4: "",
        correctAns: "True",
        explanation: "True!\n\nStudies have shown that residents of areas with abundant greenery enjoy reduced stress, improved moods, and accelerated recovery from illness."
      },
      {
        question: "You are lost in the middle of a rainforest. At which canopy layer would you have the clearest view of the way out?",
        option1: "The emergent layer",
        option2: "The canopy layer",
        option3: "The understory layer",
        option4: "The forest floor",
        correctAns: "The emergent layer",
        explanation: "The Emergent Layer!\n\nRainforests have a 4-layer canopy structure of which the emergent layer (the highest layer) stands above all other layers."
      },
      {
        question: "The world's largest primate can be found in Malaysia.",
        option1: "True",
        option2: "False",
        option3: "",
        option4: "",
        correctAns: "False",
        explanation: "False!\n\nThe world's largest primate is the gorilla, found in the rainforests of Africa."
      }
    ];

    // check if option is objectives or true/false
    useEffect(() => {
      if(questionaire[quizNum].option3.length === 0){
        setCheckEmpty(true);
      }else{
        setCheckEmpty(false)
      }
    })

    //load BUNGEE Font
    let [loaded] = useFonts({
      BungeeInline_400Regular,
    });

    if (!loaded) {
      return null;
    };

    // const generateRandomNumber = () => {
    //   var questionLength = questionaire.length
    //   var randomNum = Math.floor(Math.random() * (questionLength - 2) + 1) ;
    //   setNum(randomNum);
    // };

    // find out correct answer
    const onPressOption1 = () => {
      if(questionaire[quizNum].option1 == questionaire[quizNum].correctAns){
        setCheckOption1(true);
        setScore(score + 1);
        setCorrect(true);
        playCorrectSound();
      }else{
        playWrongSound();
      }
      setTimeout(() => {
        setModal(true);
      }, 500)
      
    };

    const onPressOption2 = () => {
      if(questionaire[quizNum].option2 == questionaire[quizNum].correctAns){
        setCheckOption2(true);
        setScore(score + 1);
        setCorrect(true);
        playCorrectSound();
      }else{
        playWrongSound();
      }
      setTimeout(() => {
        setModal(true);
      }, 500)
    };

    const onPressOption3 = () => {
      if(questionaire[quizNum].option3 == questionaire[quizNum].correctAns){
        setCheckOption3(true);
        setScore(score + 1);
        setCorrect(true);
        playCorrectSound();
      }else{
        playWrongSound();
      }
      setTimeout(() => {
        setModal(true);
      }, 500)
    };

    const onPressOption4 = () => {
      if(questionaire[quizNum].option4 == questionaire[quizNum].correctAns){
        setCheckOption4(true);
        setScore(score + 1);
        setCorrect(true);
        playCorrectSound();
      }else{
        playWrongSound();
      }
      setTimeout(() => {
        setModal(true);
      }, 500)
    };

    // close explanation and move on to next question
    const onPressExplanation = () => {
      if(quizNum < 4){
        setQuizNum(quizNum + 1);
      }else{
        setTimeout(() => {
          navigation.navigate('Game_3_Score', {
            totalScore: score,
            mode: "Easy",
          });
        }, 500)

        if(score> 3){
          playWinSound();
        }else{
          playLoseSound();
        }
      }
      setModal(false);
      setCheckOption1(false);
      setCheckOption2(false);
      setCheckOption3(false);
      setCheckOption4(false);
      setCorrect(false)
    } 

    return(
      <ImageBackground 
        style={styles.body}
        source={require('../assets/background.png')}
        resizeMode='stretch'
        imageStyle={{opacity: 0.5}}
      >
        {/* Score Bar */}
        <View style={styles.header}>
          <View style={{flex: 4}}>
            <Text style={styles.headerText}>Quiz 0{quizNum + 1}</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.headerText}>Easy Mode</Text>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.headerText}>Score {score}/5</Text>
          </View>
        </View>

        {/* Question Bar */}
        <View style={styles.questionArea}>
          <ImageBackground
            source={require('../assets/image/signboard.png')}
            style={styles.questionimage}
            resizeMode='stretch'
          >
            <Text style={styles.questionText}>{questionaire[quizNum].question}</Text>
          </ImageBackground>
        </View>

        {/* Answer Bar */}
        <View style={styles.answerBar}>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.5}
            underlayColor='#fff'
            onPress={onPressOption1}
          >
            <Text style={checkOption1 ? styles.buttontextCorrect : styles.buttontext}>{questionaire[quizNum].option1}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.5}
            underlayColor='#fff'
            onPress={onPressOption2}
          >
            <Text style={checkOption2 ? styles.buttontextCorrect : styles.buttontext}>{questionaire[quizNum].option2}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={checkEmpty ? styles.displayNoneButton : styles.button}
            activeOpacity={0.5}
            underlayColor='#fff'
            onPress={onPressOption3}
          >
            <Text style={checkOption3 ? styles.buttontextCorrect : styles.buttontext}>{questionaire[quizNum].option3}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={checkEmpty ? styles.displayNoneButton : styles.button}
            activeOpacity={0.5}
            underlayColor='#fff'
            onPress={onPressOption4}
          >
            <Text style={checkOption4 ? styles.buttontextCorrect : styles.buttontext}>{questionaire[quizNum].option4}</Text>
          </TouchableHighlight>
        </View>

        {/* Explanation */}
        <Modal
          animationType="slide"
          visible={modal}
          transparent={true}
          onRequestClose={() => {setModal(false)}}
          
        >
          <TouchableHighlight
            style={styles.explanationBox} 
            activeOpacity={1}
            underlayColor="#fff8"
            onPress={onPressExplanation}
          >
            <ImageBackground
              source={require('../assets/image/blackboard.png')}
              resizeMode='stretch'
              imageStyle={{height: "100%", width: 300, alignSelf: "center"}}
              style={{width: 300, height: "40%", justifyContent: "center"}}
            >
              <Text style={styles.explanationText}>{questionaire[quizNum].explanation}</Text>
              <Text style={correct ? styles.explanationCorrect : styles.explanationWrong}>{correct ? "Congratulations!\nYou Are Correct!" : "Sorry wrong answer"}</Text>
              
            </ImageBackground> 
            
          </TouchableHighlight>
        </Modal>

      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: "center",
    },

    header: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: '#0066FF80',
    },

    headerText: {
      alignSelf: "center",
      textAlign: "center",
      fontFamily: 'BungeeInline_400Regular',
      fontSize: 20,
      color: '#fff',
    },

    questionArea: {
      flex: 3,
      width: '100%',
      height: '40%',
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },

    questionimage: {
      width: 320,
      height: 280,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
    },

    questionText: {
      textAlign: "center",
      marginTop: '20%',
      width: '75%',
      color: '#fff',
      fontFamily: 'BungeeInline_400Regular',
      fontSize: 17,
    },
    
    answerBar: {
      flex: 4,
      flexDirection: "row",
      flexWrap: "wrap",
      width: '90%',
      marginTop: 40,
      alignItems: "center",
    },

    buttontext: {
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 13,
      color: '#fff',
      backgroundColor: '#2C3E4C',
      borderRadius: 10,
      width: 140,
    },

    buttontextCorrect: {
      fontFamily: 'BungeeInline_400Regular',
      textAlign: "center",
      fontSize: 13,
      color: '#fff',
      backgroundColor: '#0f0',
      borderRadius: 10,
      width: 140,
    },

    button: {
      margin: 10,
      borderRadius: 10,
    },

    displayNoneButton: {
      display: "none",
    },
    
    explanationBox:{
      backgroundColor: '#ffffff99', 
      width: '100%', 
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
    },

    explanationText: {
      textAlign: "center",
      alignSelf: "center",
      color: '#fff',
      fontFamily: 'BungeeInline_400Regular',
      fontSize: 15,
      width: 250,
      marginTop: 20,
    },
    
    explanationCorrect: {
      textAlign: "center",
      alignSelf: "center",
      color: '#fff',
      fontFamily: 'BungeeInline_400Regular',
      fontSize: 13,
      backgroundColor: "#00cc00",
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },

    explanationWrong: {
      textAlign: "center",
      alignSelf: "center",
      color: '#fff',
      fontFamily: 'BungeeInline_400Regular',
      fontSize: 13,
      backgroundColor: "#f00",
      marginTop: 10,
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
    }
})