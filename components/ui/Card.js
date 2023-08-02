import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}

Card.defaultProps = {
  children: ''
};

const styles = StyleSheet.create({
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 50,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 440.25,
    shadowRadius: 6
  }
});
