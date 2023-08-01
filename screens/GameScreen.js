import { StyleSheet, View, Text, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [guess, setGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && guess < userNumber) ||
      (direction === 'higher' && guess > userNumber)
    ) {
      Alert.alert('Dont Lie!', 'You know this is wrong . . .', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, guess);

    setGuess(newRndNumber);
  };

  useEffect(() => {
    if (guess === userNumber) {
      onGameOver();
    }
  }, [guess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title children="Opponent's Guess" />
      <NumberContainer children={guess} />
      <View>
        <Text>Higher or Lower?</Text>
        <PrimaryButton
          onPress={nextGuessHandler.bind(this, 'lower')}
          children="-"
        />
        <PrimaryButton
          onPress={nextGuessHandler.bind(this, 'higher')}
          children="+"
        />
      </View>
      <View>
        <Text>Logs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30
  }
});
