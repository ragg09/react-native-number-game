import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

NumberContainer.defaultProps = {
  children: 'Random Guess'
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 10,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold'
  }
});
