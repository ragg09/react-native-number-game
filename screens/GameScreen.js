import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogsItem from '../components/game/GuessLogsItem';

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  useEffect(() => {
    if (guess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [guess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title children="Opponent's Guess" />
      <NumberContainer children={guess} />
      <Card>
        <InstructionText
          children={'Higher or Lower?'}
          style={styles.instructionText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name="md-add" size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <GuessLogsItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});
