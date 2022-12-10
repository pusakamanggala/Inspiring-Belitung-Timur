import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

const NewsDetailPage = () => {
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
        <View style={{width: '50%'}}>
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
            width: '50%',
            justifyContent: 'flex-end',
          }}>
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
          source={require('../img/News/BibitBuah.png')}
        />
        <View
          style={{
            padding: 20,
          }}>
          <View>
            <Text style={{color: '#1F2937', fontSize: 25, fontWeight: '500'}}>
              SPM Negeri 4 Manggar Terima Bibit Buah
            </Text>
            <Text style={{color: '#9096A0', fontSize: 15}}>
              20 Oktober 2021
            </Text>
            <Text
              style={{
                color: '#1F2937',
                fontSize: 15,
                marginVertical: 10,
                marginTop: 20,
                fontWeight: '400',
                textAlign: 'justify',
              }}>
              Manggar, Diskominfo Beltim— Anggota DPRD Kabupaten Belitung Timur
              (Beltim), Koko Haryanto mengatakan pemanfaatan lahan kosong
              ataupun kritis sangat penting dilakukan oleh masyarakat pasca
              tambang di Kabupaten Beltim.
            </Text>
            <Text style={styles.text}>
              Hal itu disampaikan Koko dalam Sosialisasi Pemulihan Lahan dan
              Penyerahan Bibit sekaligus penyerahan bibit buah oleh pihak Fordas
              Goes To School di SMP Negeri 4 Manggar, Kamis (18/11).
            </Text>
            <Text style={styles.text}>
              “Dalam kegiatan Fordas Goes To School diharapkan ada kegiatan
              pemulihan lahan-lahan, khususnya lahan pasca tambang. Lahan kritis
              itu nantinya akan dihijaukan kembali.,” ujar Koko.
            </Text>
            <Text style={styles.text}>
              Upaya dalam pemulihan lahan bekas tambang antara lain pihak Fordas
              membagikan bibit tanaman buah seperti bibit kopi, alpukat dan
              buah-buahan lainnya sebanyak 100 bibit.
            </Text>
            <Text style={styles.text}>
              “Kami berharap bibit-bibit tersebut nantinya akan membuat hutan
              sekolah menjadi lebih hijau dan hasilnya bisa dinikmati pihak
              sekolah,” kata Koko.
            </Text>
            <Text style={styles.text}>
              Selain memberikan bibit, Fordas juga melakukan MoU kerjasama
              dengan pihak SMP Negeri 4 Manggar yang tujuannya agar kedua belah
              pihak sama-sama melakukan pemulihan lahan pasca tambang.
            </Text>
            <Text style={styles.text}>
              Sementara itu, Hamsiyah selaku Kepala Sekolah SMP Negeri 4
              Manggar, SMP Negeri 4 Manggar masih perlu pengijauan apalagi
              didukung halaman yang luas sehingga membutuhkan banyak tanaman.
            </Text>
            <Text style={styles.text}>
              “Kami sangat berterima kasih dengan Fordas yang sudah memberikan
              bantuan bibit untuk pihak sekolah, ujar Hamsiyah
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#1F2937',
    fontSize: 15,
    marginVertical: 10,
    fontWeight: '400',
    textAlign: 'justify',
  },
});

export default NewsDetailPage;
