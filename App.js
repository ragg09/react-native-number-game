import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <StartGameScreen />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
