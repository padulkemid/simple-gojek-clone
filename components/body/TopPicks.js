import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const sections = [
  {
    id: 1,
    type: 'All',
    isSelected: true,
  },
  {
    id: 2,
    type: 'COVID-19',
    isSelected: false,
  },
  {
    id: 3,
    type: 'Donation',
    isSelected: false,
  },
  {
    id: 4,
    type: 'Food',
    isSelected: false,
  },
  {
    id: 5,
    type: 'J3K',
    isSelected: false,
  },
  {
    id: 6,
    type: 'Lifestyles',
    isSelected: false,
  },
  {
    id: 7,
    type: 'Payments',
    isSelected: false,
  },
];

const TopPicks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top picks for you</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {sections.map(({id, type, isSelected}) => (
          <View
            key={id}
            style={[
              styles.sectionContainer,
              ...(isSelected ? [styles.selectedBg] : [styles.unSelectedBg]),
            ]}>
            <Text
              style={[
                styles.regFont,
                ...(isSelected
                  ? [styles.sectionSelected]
                  : [styles.sectionUnselected]),
              ]}>
              {type}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
  header: {
    marginVertical: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  sectionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 5,
    borderColor: '#E8E8E8',
  },
  regFont: {
    fontFamily: 'Montserrat-Regular',
  },
  selectedBg: {
    backgroundColor: '#28A24E',
  },
  unSelectedBg: {
    backgroundColor: 'white',
  },
  sectionSelected: {
    color: 'white',
  },
  sectionUnselected: {
    color: '#BFBFBF',
  },
});

export default TopPicks;
