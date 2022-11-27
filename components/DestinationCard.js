import React from 'react';
import {View, Text, Image} from 'react-native';

const DestinationsCard = props => {
  return (
    <View style={{}}>
      <Image
        style={{borderRadius: 10, overflow: 'hidden'}}
        source={props.path}
      />
      <View
        style={{
          padding: 5,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
          width: '100%',
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        }}>
        <Text style={{fontSize: 17, color: 'white'}}>{props.title}</Text>
      </View>
    </View>
  );
};

export default DestinationsCard;
