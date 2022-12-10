import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const BottomBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleIconHome = () => {
    if (route.name === 'Home') {
      return require('../icons/BottomBar/home_active.png');
    } else {
      return require('../icons/BottomBar/home.png');
    }
  };

  const handleIconDestinations = () => {
    if (route.name === 'Destinations') {
      return require('../icons/BottomBar/destinations_active.png');
    } else {
      return require('../icons/BottomBar/destinations.png');
    }
  };

  const handleIconInformations = () => {
    if (route.name === 'Informations') {
      return require('../icons/BottomBar/information_active.png');
    } else {
      return require('../icons/BottomBar/information.png');
    }
  };

  const handleIconOthers = () => {
    if (route.name === 'Others') {
      return require('../icons/BottomBar/other_active.png');
    } else {
      return require('../icons/BottomBar/other.png');
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
      }}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.icon}>
            <Image source={handleIconHome()} />
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
            <Image source={handleIconDestinations()} />
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
            <Image source={handleIconInformations()} />
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
            <Image source={handleIconOthers()} />
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
