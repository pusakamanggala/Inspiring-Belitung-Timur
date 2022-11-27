import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Category = () => {
  return (
    <View
      style={{
        borderTopWidth: 2,
        width: '90%',
        borderTopColor: '#E0E0E0',
        marginVertical: 30,
      }}>
      <View style={{padding: 30}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: '#4B5563',
            fontWeight: '500',
          }}>
          Jelajahi Sekarang
        </Text>
        <Text style={{fontSize: 13, textAlign: 'center', color: '#9096A0'}}>
          Pilih kategori yang dinikmati
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/nature.png')}
          />
          <Text style={styles.iconTitle}>Wisata Alam</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/water.png')}
          />
          <Text style={styles.iconTitle}>Wisata Air</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/culinary.png')}
          />
          <Text style={styles.iconTitle}>Wisata Kuliner</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/history.png')}
          />
          <Text style={styles.iconTitle}>Wisata Sejarah</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/hotel.png')}
          />
          <Text style={styles.iconTitle}>Hotel</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/ATM.png')}
          />
          <Text style={styles.iconTitle}>Layanan Publik</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/transport.png')}
          />
          <Text style={styles.iconTitle}>Travel</Text>
        </View>

        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../icons/Category/souvenir.png')}
          />
          <Text style={styles.iconTitle}>Belanja Oleh-oleh</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'column',
    width: 60,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconTitle: {
    textAlign: 'center',
    color: '#4B5563',
  },
});

export default Category;
