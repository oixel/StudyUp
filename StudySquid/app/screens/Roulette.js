import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

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
            {!spinning &&
              <>
                <TouchableOpacity style={styles.button} onPress={getRandomName} disabled={spinning}>
                  <Text style={styles.spinText}>SPIN!</Text>
                </TouchableOpacity>
              </>}
          </>
        }
        {(randomName && !spinning) &&
          <>
            <Text style={styles.customFont}>You're Up!</Text>
            <Text style={styles.text}>{randomName}</Text>
          </>
        }

        {(!spinning && !randomName) &&
          <>
            <TouchableOpacity style={styles.button} onPress={() => { setScreen(screen - 1) }}>
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
          </>}
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
    paddingHorizontal: 80,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    fontFamily: 'PixelGame',
    fontSize: 30,
    backgroundColor: '#FADADD',
    marginBottom: 20,
    marginTop: 30,

  },
  customFont: {
    fontFamily: 'PixelGame',
    fontSize: 75,
    marginTop: 230

  },
  backgroundImage: {
    position: 'absolute',
    width: "100%",
    height: "100%",
  },
  spinText: {
    marginTop: 10,
    paddingbottom: 4,
    color: 'white',
    paddingHorizontal: 25,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    fontFamily: 'PixelGame',
    fontSize: 40,
    backgroundColor: '#8baedb',
  },
  buttonText: {
    marginTop: 80,
    paddingTop: 4,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    fontFamily: 'PixelGame',
    fontSize: 30,
    backgroundColor: '#ffdacc',

  }

});

export default Roulette;
