import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AltTopBar = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '10%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#E0E0E0',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{marginRight: 30, width: 21, height: 20}}
            source={require('../icons/TopBar/back.png')}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 20, fontWeight: '500', color: '#4B5563'}}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default AltTopBar;
