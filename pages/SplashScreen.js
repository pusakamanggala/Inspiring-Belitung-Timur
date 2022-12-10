import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#EBF5FF'}}>
      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../img/LogoInspiring.png')}
          style={{marginBottom: 10}}
        />
        <Image source={require('../img/LogoInspiringText.png')} />
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{justifyContent: 'flex-start'}}>Didukung oleh</Text>
        <View style={{justifyContent: 'flex-end', padding: 20}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-evenly',
            }}>
            <Image source={require('../img/LogoBaltim.png')} />
            <Image source={require('../img/LogoGeopark.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
