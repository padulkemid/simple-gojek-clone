import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {SearchBar, Balance, TopPicks} from './';

const BodyContainer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.handleBar} />
      <SearchBar />
      <Balance />
      <TopPicks />
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
    borderTopColor: '#E8E8E8',
  },
});

export default BodyContainer;
