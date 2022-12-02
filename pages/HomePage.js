import React from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import Category from '../components/Category';
import DestinationsCard from '../components/DestinationCard';
import HeroSection from '../components/HeroSection';
import News from '../components/News';
import MainTopBar from '../components/MainTopBar';
import BottomBar from '../components/BottomBar';

const HomePage = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <MainTopBar />
      <ScrollView style={{height: '80%'}}>
        <View>
          <HeroSection />
          {/* Tourist destination */}
          <View style={{}}>
            <View style={{padding: 30}}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  color: '#4B5563',
                  fontWeight: '500',
                }}>
                Destinasi Wisata
              </Text>
              <Text
                style={{fontSize: 13, textAlign: 'center', color: '#9096A0'}}>
                Pilihan Terbaik
              </Text>
            </View>
            {/* Row 1 */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingBottom: 25,
                width: '100%',
              }}>
              <DestinationsCard
                path={require('../img/PantaiSerdang.png')}
                title="Pantai Serdang"
              />
              <DestinationsCard
                path={require('../img/PatungDewiKwanIm.png')}
                title="Pihara Patung Dewi Kwan Im"
              />
            </View>
            {/* End of Row 1 */}
            {/* Row 2 */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingBottom: 25,
              }}>
              <DestinationsCard
                path={require('../img/ReplikaSD.png')}
                title="Replika SD Laskar Pelangi"
              />
              <DestinationsCard
                path={require('../img/PantaiNyiurMelambai.png')}
                title="Pantai Nyiur Melambai"
              />
            </View>
            {/* End of Row 2 */}
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: '#0085CC',
                margin: 20,
              }}
              onPress={() => navigation.navigate('Destinations')}>
              Lihat lainnya
            </Text>
          </View>
          {/* App Menu */}
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Category />
          </View>
        </View>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image source={require('../img/WarningBanner.png')} />
        </View>
        <View
          style={{width: '100%', alignItems: 'center', alignContent: 'center'}}>
          <News />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default HomePage;
