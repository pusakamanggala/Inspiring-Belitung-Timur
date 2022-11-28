import React from 'react';
import AltTopBar from '../components/AltTopBar';
import DestinationsCardSM from '../components/DestinationsCardSM';
import {View} from 'react-native';

const FavDestinationsPage = () => {
  return (
    <>
      <AltTopBar title="Favorit Destinasi" />
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
        />
      </View>
    </>
  );
};

export default FavDestinationsPage;
