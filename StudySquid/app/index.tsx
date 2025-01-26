import { View } from "react-native";
import { useState } from "react";

import Welcome from "./screens/Welcome";
import Lobby from "./screens/Lobby";
import SetSelector from "./screens/SetSelector";
import Roulette from "./screens/Roulette";
import TaptheScreenToStart from "./screens/TaptheScreenToStart";
import HeadsUp from "./screens/HeadsUp";
import Results from "./screens/Results";

export default function Index() {
  const [screen, setScreen] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(-1);
  const [questionSet, setQuestionSet] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }
      }
    >
      {screen == 0 && <Welcome screen={screen} setScreen={setScreen} />}
      {screen == 1 && <Lobby screen={screen} setScreen={setScreen} players={players} setPlayers={setPlayers} />}
      {screen == 2 && <SetSelector screen={screen} setScreen={setScreen} questionSet={questionSet} setQuestionSet={setQuestionSet} />}
      {screen == 3 && <Roulette screen={screen} setScreen={setScreen} players={players} setCurrentPlayer={setCurrentPlayer} />}
      {screen == 4 && <TaptheScreenToStart screen={screen} setScreen={setScreen} />}
      {screen == 5 && <HeadsUp screen={screen} setScreen={setScreen} isActive={screen == 5} questionSet={questionSet} players={players} setPlayers={setPlayers} currentPlayer={currentPlayer} />}
      {screen == 6 && <Results />}
    </View>
  );
}
