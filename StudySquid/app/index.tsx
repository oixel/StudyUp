import { Text, View } from "react-native";

import Lobby from "./screens/Lobby"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lobby />
    </View>
  );
}
