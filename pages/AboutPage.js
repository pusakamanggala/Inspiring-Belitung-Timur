import React from 'react';
import TopBar from '../components/TopBar';
import {StyleSheet} from 'react-native';
import AltTopBar from '../components/AltTopBar';
import {Text, View} from 'react-native';

const AboutPage = () => {
  return (
    <>
      <AltTopBar title="Tentang" />
      <View style={{padding: 20}}>
        <Text style={{color: '#1F2937', fontSize: 30, fontWeight: '500'}}>
          Inspiring Belitung Timur, the land of maritime Spices route
        </Text>
        <Text
          style={{
            color: '#1F2937',
            fontSize: 15,
            fontWeight: '400',
            marginVertical: 20,
          }}>
          Aplikasi Inspiring Belitung Timur, memudahkan untuk menemukan
          wisata-wisata di Kabupaten Belitung Timur.
        </Text>
        <Text
          style={{
            color: '#1F2937',
            fontSize: 15,
            fontWeight: '400',
          }}>
          Sistem Informasi Dan Konten Promosi Multimedia Dinas Kebudayaan Dan
          Pariwisata Kabupaten Belitung Timur 2021.
        </Text>
      </View>
    </>
  );
};

export default AboutPage;
