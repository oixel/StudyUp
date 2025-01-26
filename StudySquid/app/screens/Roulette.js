import { Text, View, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const Roulette = ({ screen, setScreen, players, setCurrentPlayer }) => {
  const [randomName, setRandomName] = useState('');
  const [spinning, setSpinning] = useState(false);

  const getRandomName = () => {
    if (spinning) return; // Prevent triggering if already spinning

    setSpinning(true);
    let counter = 0;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * players.length);
      setRandomName(players[randomIndex].name);
      counter += 1;

      // Stop after 2 seconds (2000 ms)
      if (counter > 30) {
        clearInterval(interval);
        setSpinning(false);
        const finalIndex = Math.floor(Math.random() * players.length); // Final random name
        setRandomName(players[finalIndex].name);

        // Move to next screen after a short delay
        setTimeout(() => {
          setCurrentPlayer(finalIndex);
          setScreen(screen + 1);
        }, 3000);  // Waits 3 seconds before moving to next screen
      }
    }, 50); // Change name every 100 ms
  };

  return (
    <>
      <View style={styles.container}>
        {(!randomName || spinning) &&
          <>
            <Text style={styles.customFont}>WHO'S UP?</Text>
            <Text style={styles.text}>{randomName}</Text>
            <Button title="Spin" onPress={getRandomName} disabled={spinning} />
          </>
        }
        {(randomName && !spinning) &&
          <>
            <Text style={styles.customFont}>It's your turn:</Text>
            <Text style={styles.text}>{randomName}</Text>
          </>
        }
        {!spinning && <Button
          onPress={() => { setScreen(screen - 1) }}

          title="Go Back"
          color='white'
        />}
      </View >
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    fontFamily: 'PixelGame',
    fontSize: 30,
    backgroundColor: '#FADADD',
    marginBottom: 20,
    marginTop: 30,

  },
  customFont: {
    fontFamily: 'PixelGame',
    fontSize: 50,
    marginBottom: 250,
  },
  backgroundImage: {
    position: 'absolute',
    width: "100%",
    height: "100%",
  }
});

export default Roulette;
