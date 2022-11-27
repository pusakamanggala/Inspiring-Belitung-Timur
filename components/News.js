import React from 'react';
import {View, Text, Image} from 'react-native';

const News = () => {
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
        }}>
        Informasi Lainnya
      </Text>
    </View>
  );
};

const NewsList = props => {
  return (
    <View style={{borderTopWidth: 1.5, borderTopColor: '#E0E0E0'}}>
      <View style={{marginVertical: 20, flexDirection: 'row'}}>
        <Image
          style={{borderRadius: 10, overflow: 'hidden'}}
          source={props.path}
        />
        <View style={{marginLeft: 15, width: '80%'}}>
          <Text style={{fontSize: 18, color: '#1F2937'}}>{props.title}</Text>
          <Text style={{color: '#9096A0'}}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default News;
