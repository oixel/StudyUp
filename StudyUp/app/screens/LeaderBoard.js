import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font';

const LeaderBoard = ({ setScreen, players }) => {
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
          <TouchableOpacity style={styles.button} onPress={() => { setScreen(3) }}>
            <Text style={styles.buttonText}>Next Player!</Text>
          </TouchableOpacity>
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
    marginTop: 40,
  },
  title: {
    fontFamily: 'PixelGame',
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    textDecorationLine: 'underline',
    marginBottom: 30,
  },
  playerRow: {
    marginBottom: 10,
  },
  playerText: {
    fontFamily: 'PixelGame',
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    marginTop: 40,
    paddingTop: 4,
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    fontFamily: 'PixelGame',
    fontSize: 30,
    backgroundColor: '#ffdacc',

  }
});

export default LeaderBoard;
