import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Dimensions} from 'react-native';

import {PageList} from '../components/header';
import {BodyContainer} from '../components/body';
import {FloatingButtons} from '../components/float';

const {width, height} = Dimensions.get('window');

const MainScreen = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <PageList />
        <BodyContainer />
        <FloatingButtons />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#92C541',
    width,
    height,
  },
});

export default MainScreen;
