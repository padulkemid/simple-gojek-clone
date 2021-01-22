import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const SearchBar = () => {
  const [searchValue, onSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        onChangeText={onSearchText}
        value={searchValue}
        placeholder="Find food, places, or services..."
      />
      {/* TODO: add icon */}
      <View style={styles.profile}>
        <Text style={styles.profileText}>P</Text>
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
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    fontFamily: 'Montserrat-Regular',
    borderColor: '#EAEAEA',
    backgroundColor: '#F2F7F9',
  },
  profile: {
    width: 50,
    borderRadius: 100,
    backgroundColor: '#00880D',
  },
  profileText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    marginVertical: 10,
    fontSize: 20,
  },
});

export default SearchBar;
