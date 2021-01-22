import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

const BodyContainer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.handleBar} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  handleBar: {
    width: 25,
    alignSelf: 'center',
    borderTopWidth: 3,
    borderTopColor: 'lightgray',
  },
});

export default BodyContainer;
