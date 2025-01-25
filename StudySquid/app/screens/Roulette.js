import { Text, View , StyleSheet, Button} from 'react-native'
import React, { Component, useState } from 'react'


const names = ['Kriti', 'Kritika', 'Oixel', 'Divyanshi'];

 const Roulette = () =>{
  const [randomName, setRandomName] = useState('');
  const [spinning, setSpinning] = useState(false);

  const getRandomName = () => {
    if (spinning) return; // Prevent triggering if already spinning

    setSpinning(true);
    let counter = 0;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      setRandomName(names[randomIndex]);
      counter += 1;

      // Stop after 2 seconds (2000 ms)
      if (counter > 30) {
        clearInterval(interval);
        setSpinning(false);
        const finalIndex = Math.floor(Math.random() * names.length); // Final random name
        setRandomName(names[finalIndex]);
      }
    }, 50 ); // Change name every 100 ms
  };

  return (
    <View style={styles.container}>
      <Text style={styles.customFont}>PLAYER TURN</Text>
      <Text style={styles.text}>{randomName}</Text>
      <Button title="Spin" onPress={getRandomName} disabled={spinning} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
    fontSize: 25,
    marginBottom: 20,
    marginTop: 30,
  },
  customFont: {
    fontFamily: "Handjet",
    fontSize: 40,
    marginBottom: 250,
  }

});

  export default Roulette;
