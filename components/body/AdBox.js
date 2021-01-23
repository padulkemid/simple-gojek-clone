import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Partnership = () => (
  <View style={[styles.container, partnershipStyles.container]}>
    <Text style={[styles.textBold, styles.footerText]}>GoPay</Text>
    <Text style={[styles.textBold, styles.contentText]}>
      Use GoPay at Guardian
    </Text>
    <Text style={[styles.textBold, styles.timeText]}>
      AVAILABLE UNTIL: 31 January 21
    </Text>
    <Text style={[styles.textLight, styles.footerText]}>
      Shop at Guardian Get Rp5.000 Voucher Cashback
    </Text>
  </View>
);

const GoFood = () => (
  <View style={[styles.container, gofoodStyles.container]}>
    <Text style={[styles.textBold, styles.footerText]}>gofood</Text>
    <Text style={[styles.textBold, styles.contentText]}>
      Promo picks from restos near you
    </Text>
    <Text style={[styles.textLight, styles.footerText]}>
      Check to see what's good
    </Text>
  </View>
);

const AdBox = ({type}) => {
  if (type === 'partnership') {
    return <Partnership />;
  }
  return <GoFood />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginHorizontal: 3,
    marginVertical: 5,
  },
  textLight: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  textBold: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  contentText: {
    marginTop: 20,
    fontSize: 20,
  },
  timeText: {
    marginBottom: 20,
    fontSize: 18,
  },
  footerText: {
    fontSize: 12,
  },
});
const partnershipStyles = StyleSheet.create({
  container: {
    backgroundColor: '#5193DD',
  },
});
const gofoodStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5939C',
  },
});

export default AdBox;
