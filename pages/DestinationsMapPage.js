import React from 'react';
import AltTopBar from '../components/AltTopBar';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

const DestinationsMapPage = () => {
  return (
    <View style={{height: '100%'}}>
      <AltTopBar title="Peta Destinasi" />
      <View style={{height: '90%', width: '100%'}}>
        <Image
          style={{width: 400, height: '100%'}}
          source={require('../img/map.png')}
        />
        <ScrollView
          horizontal={true}
          style={{height: 70, position: 'absolute'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.labelActive}>Semua</Text>
            <Text style={styles.label}>Wisata Alam</Text>
            <Text style={styles.label}>Wisata Air</Text>
            <Text style={styles.label}>Wisata Kuliner</Text>
            <Text style={styles.label}>Wisata Sejarah</Text>
            <Text style={styles.label}>Hotel Penginapan</Text>
            <Text style={styles.label}>Layanan Publik</Text>
            <Text style={styles.label}>Travel</Text>
            <Text style={styles.label}>Oleh-oleh</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 8,
  },
  labelActive: {
    color: '#0085CC',
    backgroundColor: '#EBF5FF',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 8,
  },
});

export default DestinationsMapPage;
