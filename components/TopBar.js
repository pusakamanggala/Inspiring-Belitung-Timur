import React from 'react';
import {View, Text, Image} from 'react-native';

const TopBar = props => {
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
      <View>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#4B5563'}}>
          {props.title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '18%',
          alignItems: 'center',
        }}>
        <Image style={{width: 20, height: 20}} source={props.path} />
        <Image style={{width: 20, height: 20}} source={props.path2} />
      </View>
    </View>
  );
};

export default TopBar;
