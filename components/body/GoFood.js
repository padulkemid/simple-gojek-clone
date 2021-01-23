import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

const foods = [
  {
    id: 1,
    name: 'AGUAN Chineese Food',
    location: 'Bogor Timur',
    source: require('../../assets/images/bakmi.jpg'),
  },
  {
    id: 2,
    name: 'Burger King',
    location: 'Mall Botani Square',
    source: require('../../assets/images/bk.jpeg'),
  },
  {
    id: 3,
    name: 'Geprek Mang Oji',
    location: 'Bantar Kemang',
    source: require('../../assets/images/geprek.png'),
  },
  {
    id: 4,
    name: 'Yoshinoya',
    location: 'Mall Boxies 123',
    source: require('../../assets/images/yoshinoya.jpeg'),
  },
  {
    id: 5,
    name: 'Richeese',
    location: 'Padjajaran',
    source: require('../../assets/images/richeese.jpg'),
  },
];

const GoFood = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>gofood</Text>
      <View style={styles.header}>
        <Text style={styles.text}>Best Picks in Town</Text>
        <Text style={[styles.text, styles.moreInfo]}>See All</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {foods.map(({id, name, location, source}) => (
          <View key={id} style={styles.foodContainer}>
            <Image style={styles.foodImage} source={source} />
            <Text style={styles.text}>
              {name}, {location}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  moreInfo: {
    color: '#00AC11',
  },
  foodContainer: {
    width: 90,
    marginHorizontal: 13,
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});

export default GoFood;
