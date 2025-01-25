import { Text, View } from "react-native";
import { useState } from "react";

import Lobby from "./screens/Lobby"
import Roulette from "./screens/Roulette"

export default function Index() {
  const [screen, setScreen] = useState(1);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {screen == 0 && <Welcome />} */}
      {screen == 1 && <Lobby screen={screen} setScreen={setScreen} />}
      {/* {screen == 2 && <SetList />} */}
      {screen == 2 && <Roulette />}
    </View>
  );
}
