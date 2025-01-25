import { Text, View } from "react-native";
import { useState } from "react";

import Lobby from "./screens/Lobby"
import Roulette from "./screens/Roulette"

export default function Index() {
  const [screen, setScreen] = useState(3);
  const [players, setPlayers] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {screen == 0 && <Welcome />} */}
      {screen == 1 && <Lobby screen={screen} setScreen={setScreen} players={players} setPlayers={setPlayers} />}
      {/* {screen == 2 && <SetList />} */}
      {screen == 2 && <Roulette players={players} />}
      {screen == 3 && <HeadsUp />}
    </View>
  );
}
