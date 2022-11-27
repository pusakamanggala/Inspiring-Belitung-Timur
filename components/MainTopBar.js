import React from 'react';
import {View, Image, TextInput} from 'react-native';

const MainTopBar = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        height: '10.4%',
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
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={require('../icons/TopBar/love.png')} />
        </View>
      </View>
    </View>
  );
};

export default MainTopBar;
