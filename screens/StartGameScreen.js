import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (input) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Warning',
        'Please enter a valid number between 1 and 99',
        [
          {
            text: 'Ok',
            style: 'destructive',
            onPress: () => resetInputHandler()
          }
        ],
        { cancelable: false }
      );
    }

    console.log('Valid Number');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton children="Reset" onPress={resetInputHandler} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton children="Confirm" onPress={confirmInputHandler} />
        </View>
      </View>
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
    backgroundColor: '#3b021f',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 440.25,
    shadowRadius: 6
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});
