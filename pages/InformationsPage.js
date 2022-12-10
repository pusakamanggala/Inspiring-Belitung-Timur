import React from 'react';
import {ScrollView, View} from 'react-native';
import TopBar from '../components/TopBar';
import NewsList from '../components/NewsList';
import BottomBar from '../components/BottomBar';
import {useNavigation} from '@react-navigation/native';

const InformationsPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <TopBar title="Informasi dan Berita" />
      <ScrollView style={{paddingHorizontal: 20, height: '95%'}}>
        <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
          <NewsList
            onPress={() => navigation.navigate('NewsDetailPage')}
            style={{borderTopWidth: 0, borderTopColor: '#E0E0E0'}}
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
          <NewsList
            style={{borderTopWidth: 0, borderTopColor: '#E0E0E0'}}
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
          <NewsList
            style={{borderTopWidth: 0, borderTopColor: '#E0E0E0'}}
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
      </ScrollView>
      <BottomBar />
    </>
  );
};

export default InformationsPage;
