import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const pages = [
  {
    id: 1,
    name: 'Promo',
    isSelected: false,
    icon: 'local-offer',
  },
  {
    id: 2,
    name: 'Home',
    isSelected: true,
    icon: 'house',
  },
  {
    id: 3,
    name: 'Chat',
    isSelected: false,
    icon: 'chat',
  },
];

const SelectedPage = ({isSelected, children}) => {
  if (isSelected) {
    return (
      <TouchableHighlight
        underlayColor="#9cba6b"
        activeOpacity={0.9}
        style={styles.button}
        onPress={() => {
          //
        }}>
        {children}
      </TouchableHighlight>
    );
  }

  return children;
};

const PageList = () => {
  return (
    <View style={styles.container}>
      {pages.map(({id, name, isSelected, icon}) => (
        <SelectedPage isSelected={isSelected} key={id}>
          <View style={styles.buttonBg}>
            <Icon name={icon} color="white" size={23} style={styles.icon} />
            <Text style={styles.buttonText}>{name}</Text>
          </View>
        </SelectedPage>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  button: {
    backgroundColor: '#B3D77A',
    borderRadius: 60,
  },
  buttonBg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default PageList;
