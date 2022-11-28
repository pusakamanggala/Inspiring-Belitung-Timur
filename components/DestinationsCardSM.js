import React from 'react';
import {View, Image, Text} from 'react-native';

const DestinationsCardSM = props => {
  return (
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     borderBottomColor: 'rgba(158, 150, 150, 0.3)',
    //     borderBottomWidth: 1.5,
    //   }}>
    //   <Image style={{borderRadius: 8}} source={props.path} />

    //   <View
    //     style={{
    //       paddingHorizontal: 10,
    //       paddingVertical: 5,
    //       justifyContent: 'space-between',
    //     }}>
    //     <View>
    //       <Text style={{color: '#1F2937', fontSize: 18, fontWeight: '400'}}>
    //         {props.title}
    //       </Text>
    //       <Text style={{color: '#9096A0', fontSize: 15, fontWeight: '400'}}>
    //         {props.category}
    //       </Text>
    //     </View>
    //     <View>
    //       <Text
    //         style={{
    //           color: '#4B5563',
    //           fontSize: 15,
    //           fontWeight: '400',
    //         }}>
    //         {props.location}
    //       </Text>
    //     </View>
    //   </View>
    // </View>
    <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
      <View style={{marginVertical: 20, flexDirection: 'row'}}>
        <Image style={{borderRadius: 8}} source={props.path} />
        <View
          style={{
            marginLeft: 15,
            width: '80%',
            justifyContent: 'space-between',
            paddingVertical: 7,
          }}>
          <View>
            <Text style={{color: '#1F2937', fontSize: 18, fontWeight: '400'}}>
              {props.title}
            </Text>
            <Text style={{color: '#9096A0', fontSize: 14, fontWeight: '400'}}>
              {props.category}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#4B5563',
                fontSize: 14,
                fontWeight: '400',
              }}>
              {props.location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DestinationsCardSM;
