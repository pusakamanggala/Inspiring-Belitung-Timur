import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const DetailDestinationPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          zIndex: 1,
          padding: 10,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '75%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              }}>
              <Image source={require('../icons/TopBar/back.png')} />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '25%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FavoriteDestinations')}>
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              }}>
              <Image source={require('../icons/TopBar/love.png')} />
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            }}>
            <Image source={require('../icons/TopBar/shareSM.png')} />
          </View>
        </View>
      </View>
      <View></View>
      <ScrollView>
        <Image
          style={{height: 400, width: '100%'}}
          source={require('../img/Destinations/GeositeGunongLumutXL.jpg')}
        />
        <View
          style={{
            padding: 20,
          }}>
          <View
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: '#E0E0E0',
            }}>
            <Text style={{color: '#1F2937', fontSize: 25, fontWeight: '500'}}>
              Geosite Gunong Lumut
            </Text>
            <Text style={{color: '#9096A0', fontSize: 15}}>Wisata Alam</Text>
            <Text
              style={{
                color: '#1F2937',
                fontSize: 15,
                marginVertical: 20,
                fontWeight: '400',
              }}>
              Description It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: '#E0E0E0',
            }}>
            <View style={{marginVertical: 20}}>
              <Text style={{color: '#9096A0', fontSize: 15}}>Telepon</Text>
              <Text
                style={{
                  color: '#1F2937',
                  fontSize: 15,
                  fontWeight: '400',
                }}>
                0812-3456-7890
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{color: '#9096A0', fontSize: 15}}>Instagram</Text>
              <Text
                style={{
                  color: '#1F2937',
                  fontSize: 15,
                  fontWeight: '400',
                }}>
                gunonglumut
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: '#E0E0E0',
              paddingVertical: 20,
            }}>
            <Text style={{color: '#9096A0', fontSize: 15}}>Galeri</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
              }}>
              <Image
                style={{flex: 1, margin: 5, marginLeft: 0, borderRadius: 10}}
                source={require('../img/Destinations/GunongLumutGallery/1.png')}
              />
              <Image
                style={{flex: 1, margin: 5, borderRadius: 10}}
                source={require('../img/Destinations/GunongLumutGallery/2.png')}
              />
              <Image
                style={{flex: 1, margin: 5, borderRadius: 10}}
                source={require('../img/Destinations/GunongLumutGallery/3.png')}
              />
              <Image
                style={{flex: 1, margin: 5, borderRadius: 10}}
                source={require('../img/Destinations/GunongLumutGallery/4.png')}
              />
              <Image
                style={{flex: 1, margin: 5, marginRight: 0, borderRadius: 10}}
                source={require('../img/Destinations/GunongLumutGallery/5.png')}
              />
            </View>
          </View>
          <View
            style={{
              paddingVertical: 20,
            }}>
            <Text style={{color: '#9096A0', fontSize: 15}}>Lokasi</Text>
            <Text
              style={{
                color: '#1F2937',
                fontSize: 15,
                fontWeight: '400',
              }}>
              Kec. Kelapa Kampit, Kab. Belitung Timur, Mayang, Klp. Kampit
            </Text>
          </View>
        </View>
        <Image
          style={{height: 250, width: '100%'}}
          source={require('../img/Destinations/GunongLumutGallery/location.png')}
        />
      </ScrollView>
    </View>
  );
};

export default DetailDestinationPage;
