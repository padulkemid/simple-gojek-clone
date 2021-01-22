import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const BodyContainer = () => {
  return (
    <View style={styles.container}>
      <Text>TODO: add handleBar to this.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height / 1.1,
    backgroundColor: 'white',
    position: 'absolute',
    width,
  },
});

export default BodyContainer;
