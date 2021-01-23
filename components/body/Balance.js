import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AccountBalance} from './';

const actions = [
  {
    id: 1,
    name: 'Pay',
    icon: 'thumb-up',
  },
  {
    id: 2,
    name: 'Top Up',
    icon: 'upgrade',
  },
  {
    id: 3,
    name: 'Explore',
    icon: 'add-to-queue',
  },
];

// TODO: change this to icon later, just for placeholder.
const ActionIcons = ({icon}) => (
  <View style={styles.profile}>
    <Icon name={icon} size={20} color="#0081A0" style={styles.baseText} />
  </View>
);

const Balance = () => {
  return (
    <View style={[styles.baseBg, styles.container]}>
      <AccountBalance />
      {actions.map(({id, name, icon}) => (
        <View key={id} style={styles.actionContainer}>
          <ActionIcons icon={icon} />
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
    marginVertical: 5,
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
