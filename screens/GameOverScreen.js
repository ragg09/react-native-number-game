import { TextInput, Button, View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({ answer }) {
  return (
    <View style={styles.rooContaniner}>
      <Title children={'GAME OVER!'} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>X</Text> rounds to
        gues the number <Text style={styles.highlightText}>Y</Text>
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rooContaniner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
    borderWidth: 10
  },
  image: {
    height: '100%',
    width: '100%'
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 36
  },
  highlightText: {
    color: Colors.primary500
  }
});
