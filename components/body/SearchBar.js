import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  const [searchValue, onSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" color="black" size={30} />
        <TextInput
          onChangeText={onSearchText}
          value={searchValue}
          placeholder="Find food, places, or services..."
        />
      </View>
      {/* TODO: add icon */}
      <View style={styles.profile}>
        <Icon name="face" size={30} color="white" style={styles.profileIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    paddingLeft: 20,
    paddingRight: 50,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    fontFamily: 'Montserrat-Regular',
    borderColor: '#EAEAEA',
    backgroundColor: '#F2F7F9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    width: 50,
    borderRadius: 100,
    backgroundColor: '#00880D',
  },
  profileIcon: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default SearchBar;
