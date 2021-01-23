import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountBalance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="account-balance" size={20} color="#0081A0" />
        <Text style={[styles.regFont, styles.balanceType]}>gopay</Text>
      </View>
      <Text style={styles.balance}>Rp12.540</Text>
      <Text style={[styles.regFont, styles.additionalInfo]}>
        Tap for History
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  regFont: {
    fontFamily: 'Montserrat-Regular',
  },
  balanceType: {
    fontSize: 13,
  },
  balance: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
  additionalInfo: {
    fontSize: 14,
    color: '#009B0F',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default AccountBalance;
