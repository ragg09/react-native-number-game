import { StyleSheet, View, Text } from 'react-native';
import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title children="Opponent's Guess" />
      {/* Guess */}
      <View></View>
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
