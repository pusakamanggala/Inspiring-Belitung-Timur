import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const BottomBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleIcon = (routeName, passiveIconPath, activeIconPath) => {
    if (route.name === routeName) {
      return activeIconPath;
    } else {
      return passiveIconPath;
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        justifyContent: 'space-evenly',
        borderTopColor: 'rgba(158, 150, 150, 0.3)',
        borderTopWidth: 3,
        backgroundColor: 'white',
        paddingTop: '2%',
      }}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.icon}>
            <Image
              source={handleIcon(
                'Home',
                require('../icons/BottomBar/home.png'),
                require('../icons/BottomBar/home_active.png'),
              )}
            />
            <Text style={styles.iconTitle}>Beranda</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Destinations');
          }}>
          <View style={styles.icon}>
            <Image
              source={handleIcon(
                'Destinations',
                require('../icons/BottomBar/destinations.png'),
                require('../icons/BottomBar/destinations_active.png'),
              )}
              style={{marginTop: '3%'}}
            />
            <Text style={styles.iconTitle}>Destinasi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Informations');
          }}>
          <View style={styles.icon}>
            <Image
              source={handleIcon(
                'Informations',
                require('../icons/BottomBar/information.png'),
                require('../icons/BottomBar/information_active.png'),
              )}
            />
            <Text style={styles.iconTitle}>Informasi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Others');
          }}>
          <View style={styles.icon}>
            <Image
              source={handleIcon(
                'Others',
                require('../icons/BottomBar/other.png'),
                require('../icons/BottomBar/other_active.png'),
              )}
            />
            <Text style={styles.iconTitle}>Lainnya</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  iconTitle: {
    fontSize: 11,
    color: '#9096A0',
    fontWeight: '500',
  },
  icon: {
    height: '72%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BottomBar;
