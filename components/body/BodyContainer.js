import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScrollView from 'rn-faded-scrollview';

import {SearchBar, Balance, TopPicks, GoFood} from './';

const fadeColors = [
  'rgba(255, 255, 255, 0.18)',
  'rgba(255, 255, 255, 0.6)',
  'rgba(255, 255, 255, 0.9)',
];

const BodyContainer = () => {
  return (
    <ScrollView
      fadeSize={50}
      allowEndFade={false}
      startFadeStyle={styles.topBorder}
      style={[styles.container, styles.topBorder]}
      fadeColors={fadeColors}
      allowStartFade>
      <View style={styles.handleBar} />
      <SearchBar />
      <Balance />
      <TopPicks />
      <GoFood />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topBorder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    padding: 10,
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
