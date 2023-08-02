import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';

export default function GameOverScreen({ answer }) {
  return (
    <View style={styles.inputContainer}>
      <Title children={'Game Over'} />
      <Text style={styles.scoreText}>Final Guess:</Text>
      <Text style={styles.score}> {answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 440.25,
    shadowRadius: 6
  },
  scoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  score: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50
  }
});
