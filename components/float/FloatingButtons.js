import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const {height} = Dimensions.get('window');

const buttons = [
  {
    id: 1,
    name: 'GoRide',
    backgroundColor: '#00A912',
  },
  {
    id: 2,
    name: 'GoCar',
    backgroundColor: '#00A912',
  },
  {
    id: 3,
    name: 'GoFood',
    backgroundColor: '#EE2636',
  },
  {
    id: 4,
    name: 'GoMart',
    backgroundColor: '#EE2636',
  },
];

const RenderButton = ({name, backgroundColor}) => (
  <TouchableHighlight
    underlayColor="white"
    activeOpacity={0.9}
    style={[styles.button, {backgroundColor}]}
    onPress={() => {
      //
    }}>
    <View style={styles.iconContainer}>
      <Text style={[styles.iconText, styles.centerText]}>{name[2]}</Text>
    </View>
  </TouchableHighlight>
);

const FloatingButtons = () => {
  return (
    <View style={styles.container}>
      {buttons.map(({id, ...button}) => (
        <View key={id}>
          <RenderButton {...button} />
          <Text style={styles.centerText}>{button.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 100,
    zIndex: 10,
    marginHorizontal: 20,
    bottom: height / 12,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: 'absolute',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
  },
  button: {
    borderRadius: 100,
    marginBottom: 10,
    marginHorizontal: 10,
    width: 50,
    height: 50,
  },
  iconText: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
  },
  centerText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default FloatingButtons;
