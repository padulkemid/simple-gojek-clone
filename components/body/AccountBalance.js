import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountBalance = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.regFont, styles.balanceType]}>gopay</Text>
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
});

export default AccountBalance;
