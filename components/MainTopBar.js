import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MainTopBar = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: 'center',
        height: '10%',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(158, 150, 150, 0.3)',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 5,
          alignItems: 'center',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={require('../img/LogoInspiringSM.png')} />
        </View>
        <View style={{flex: 3}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#9096A0',
              borderRadius: 30,
              paddingHorizontal: 10,
              height: '70%',
              color: 'black',
            }}
            placeholder={'Cari Wisata'}
            placeholderTextColor="#9096A0"
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FavoriteDestinations')}>
            <Image source={require('../icons/TopBar/love.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainTopBar;
