import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function GuessLogsItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.numberText}>#{roundNumber}</Text>
      <Text style={styles.numberText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

GuessLogsItem.defaultProps = {
  children: ''
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevations: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});
