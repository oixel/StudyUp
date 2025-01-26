import { View, ImageBackground, StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Welcome from "./screens/Welcome";
import Lobby from "./screens/Lobby";
import SetSelector from "./screens/setSelector";
import Roulette from "./screens/Roulette";
import TaptheScreenToStart from "./screens/TaptheScreenToStart";
import HeadsUp from "./screens/HeadsUp";
import LeaderBoard from "./screens/LeaderBoard";

export default function Index() {
  const [screen, setScreen] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(-1);
  const [questionSet, setQuestionSet] = useState([]);

  const [seenQuestions, setSeenQuestions] = useState([]); // Stores the indexes of questions that have been previously seen to avoid repeating questions 
  const [results, setResults] = useState({});  // Stores the questions that the current player got right/wrong in the current round

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }
      }
    >
      {/* Hide clock and battery information */}
      <StatusBar hidden />

      {/* Display screen based on current screen state */}
      <ImageBackground
        source={require('../assets/images/FullStartScreen.png')}
        style={styles.backgroundImage}
      />

      {screen == 0 &&
        <Welcome
          screen={screen}
          setScreen={setScreen}
        />}
      {screen == 1 &&
        <Lobby
          screen={screen}
          setScreen={setScreen}
          players={players}
          setPlayers={setPlayers}
        />}
      {screen == 2 &&
        <SetSelector
          screen={screen}
          setScreen={setScreen}
          setQuestionSet={setQuestionSet}
        />}
      {screen == 3 &&
        <Roulette
          screen={screen}
          setScreen={setScreen}
          players={players}
          setCurrentPlayer={setCurrentPlayer}
        />}
      {screen == 4 &&
        <TaptheScreenToStart
          screen={screen}
          setScreen={setScreen}
        />}
      {screen == 5 &&
        <HeadsUp
          screen={screen}
          setScreen={setScreen}
          isActive={screen === 5}
          questionSet={questionSet}
          players={players}
          setPlayers={setPlayers}
          currentPlayer={currentPlayer}
          seenQuestions={seenQuestions}
          setSeenQuestions={setSeenQuestions}
          results={results}
          setResults={setResults}
        />}
      {screen == 6 &&
        <LeaderBoard
          setScreen={setScreen}
          players={players}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
});

