import React from 'react';
import AltTopBar from '../components/AltTopBar';
import DestinationsCardSM from '../components/DestinationsCardSM';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FavDestinationsPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <AltTopBar title="Favorit Destinasi" />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <DestinationsCardSM
            path={require('../img/Destinations/GeositeTebatRasau.png')}
            title="Geosite Tebat Rasau"
            category="Wisata Air"
            location="Jl. K.A. Bujang, Batu Penyu, Blitung Timur"
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <DestinationsCardSM
            path={require('../img/Destinations/GeositeGunongLumut.png')}
            title="Geosite Gunong Lumut"
            category="Wisata Alam"
            location="Jl. K.A. Bujang, Batu Penyu, Blitung Timur"
            navigateTo={() => navigation.navigate('DetailDestinationPage')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default FavDestinationsPage;
