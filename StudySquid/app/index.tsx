import { Text, View } from "react-native";
import { useState, useEffect } from "react";

import Lobby from "./screens/Lobby";
import SetSelector from "./screens/SetSelector";
import Roulette from "./screens/Roulette";
import TaptheScreenToStart from "./screens/TaptheScreenToStart";
import HeadsUp from "./screens/HeadsUp";
import Results from "./screens/Results";

export default function Index() {
  const [screen, setScreen] = useState(1);
  const [players, setPlayers] = useState([]);
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
      {/* {screen == 0 && <Welcome />} */}
      {screen == 1 && <Lobby screen={screen} setScreen={setScreen} players={players} setPlayers={setPlayers} />}
      {screen == 2 && <SetSelector screen={screen} setScreen={setScreen} questionSet={questionSet} setQuestionSet={setQuestionSet} />}
      {screen == 3 && <Roulette players={players} />}
      {screen == 4 && <TaptheScreenToStart />}
      {screen == 5 && <HeadsUp screen={screen} setScreen={setScreen} isActive={screen == 5} />}
      {screen == 6 && <Results />}
    </View>
  );
}
