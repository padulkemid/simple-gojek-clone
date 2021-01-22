import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

const pages = [
  {
    id: 1,
    name: 'Promo',
    isSelected: false,
  },
  {
    id: 2,
    name: 'Home',
    isSelected: true,
  },
  {
    id: 3,
    name: 'Chat',
    isSelected: false,
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
      {pages.map(({id, name, isSelected}) => (
        <SelectedPage isSelected={isSelected} key={id}>
          <View style={styles.buttonBg}>
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
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default PageList;
