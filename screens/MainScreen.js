import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Dimensions} from 'react-native';

import {PageList} from '../components/header';
import {BodyContainer} from '../components/body';

const {width, height} = Dimensions.get('window');

const MainScreen = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <PageList />
        <BodyContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#92C541',
    width,
    height: height - 30,
  },
});

export default MainScreen;
