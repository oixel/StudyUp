import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

const LeaderBoard = ({setScreen, players}) => {
  // Load fonts (optional, you can use default fonts too)
  const [fontsLoaded] = useFonts({
    'PixelGame': require('../../assets/fonts/PixelGame.otf'),
  });

  // Sort players by score
    const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <>
      <ImageBackground
        source={require('../../assets/images/LeaderboardVertical.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Leaderboard</Text>

          {/* Display the top 3 players */}
          {sortedPlayers.slice(0, 3).map((player, index) => (
            <View key={index} style={styles.playerRow}>
              <Text style={styles.playerText}>
                {index + 1}. {player.name} - {player.score} points
              </Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontFamily: 'PixelGame',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  playerRow: {
    marginBottom: 10,
  },
  playerText: {
    fontFamily: 'PixelGame',
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default LeaderBoard;
