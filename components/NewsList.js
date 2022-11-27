import React from 'react';
import {View, Text, Image} from 'react-native';

const NewsList = props => {
  return (
    <View style={{borderTopWidth: 1.5, borderTopColor: '#E0E0E0'}}>
      <View style={{marginVertical: 20, flexDirection: 'row'}}>
        <Image
          style={{borderRadius: 10, overflow: 'hidden'}}
          source={props.path}
        />
        <View style={{marginLeft: 15, width: '80%'}}>
          <Text style={{fontSize: 18, color: '#1F2937'}}>{props.title}</Text>
          <Text style={{color: '#9096A0'}}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsList;
