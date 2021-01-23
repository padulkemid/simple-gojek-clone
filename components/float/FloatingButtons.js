import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {height} = Dimensions.get('window');

const buttons = [
  {
    id: 1,
    name: 'GoRide',
    backgroundColor: '#00A912',
    icon: 'two-wheeler',
  },
  {
    id: 2,
    name: 'GoCar',
    backgroundColor: '#00A912',
    icon: 'directions-car',
  },
  {
    id: 3,
    name: 'GoFood',
    backgroundColor: '#EE2636',
    icon: 'restaurant',
  },
  {
    id: 4,
    name: 'GoMart',
    backgroundColor: '#EE2636',
    icon: 'shopping-cart',
  },
];

const RenderButton = ({name, backgroundColor, icon}) => (
  <TouchableHighlight
    underlayColor="white"
    activeOpacity={0.9}
    style={[styles.button, {backgroundColor}]}
    onPress={() => {
      //
    }}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={30} color="white" style={styles.iconText} />
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
    margin: 10,
    color: 'white',
  },
  centerText: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
});

export default FloatingButtons;
