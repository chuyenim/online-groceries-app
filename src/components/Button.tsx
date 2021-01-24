import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height: screenHeight} = Dimensions.get('screen');
interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 19.0,
    paddingVertical: screenHeight * 0.027,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '$greenColour',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: '1.125rem',
    lineHeight: '1.3rem',
    height: '1.125rem',
  },
});

export default Button;
