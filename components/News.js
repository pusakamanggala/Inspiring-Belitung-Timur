import React from 'react';
import {View, Text, Image} from 'react-native';
import NewsList from './NewsList';
import {useNavigation} from '@react-navigation/native';

const News = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '90%'}}>
      <View style={{padding: 20, marginBottom: 15}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: '#4B5563',
            fontWeight: '500',
          }}>
          Informasi dan Berita
        </Text>
        <Text style={{fontSize: 13, textAlign: 'center', color: '#9096A0'}}>
          Seputar Belitung Timur
        </Text>
      </View>
      <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
        <NewsList
          onPress={() => navigation.navigate('NewsDetailPage')}
          path={require('../img/News/kerjurkab.png')}
          title="Adakan Kerjurkab Tinju 2022"
          date="20 Oktober 2021"
        />
        <NewsList
          path={require('../img/News/JobFair.png')}
          title="Wakub Beltim Apresiasi Job Fair Beltim"
          date="15 Oktober 2021"
        />
        <NewsList
          path={require('../img/News/LKPM.png')}
          title="LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau"
          date="8 Oktober 2021"
        />
      </View>

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          color: '#0085CC',
          marginTop: 30,
          marginBottom: 50,
        }}
        onPress={() => navigation.navigate('Informations')}>
        Informasi Lainnya
      </Text>
    </View>
  );
};

export default News;
