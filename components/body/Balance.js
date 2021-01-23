import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AccountBalance} from './';

const actions = [
  {
    id: 1,
    name: 'Pay',
  },
  {
    id: 2,
    name: 'Top Up',
  },
  {
    id: 3,
    name: 'Explore',
  },
];

// TODO: change this to icon later, just for placeholder.
const ActionIcons = ({children}) => (
  <View style={styles.profile}>
    <Text style={[styles.baseText, styles.profileText]}>{children}</Text>
  </View>
);

const Balance = () => {
  return (
    <View style={[styles.baseBg, styles.container]}>
      <AccountBalance />
      {actions.map(({id, name}) => (
        <View key={id} style={styles.actionContainer}>
          <ActionIcons>{name[0]}</ActionIcons>
          <Text style={[styles.baseText, styles.actionText]}>{name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  baseBg: {
    backgroundColor: '#0081A0',
  },
  baseText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  profileText: {
    fontSize: 20,
    color: '#00880D',
  },
  actionText: {
    marginTop: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default Balance;
