import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TopBar from '../components/TopBar';
import DestinationsCard from '../components/DestinationCard';
import BottomBar from '../components/BottomBar';

const DestinationsPage = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <TopBar
        title="Destinasi"
        path={require('../icons/TopBar/search.png')}
        path2={require('../icons/TopBar/map.png')}
      />
      <ScrollView horizontal={true} style={{height: '5%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 9,
          }}>
          <Text
            style={{
              color: '#0085CC',
              backgroundColor: '#EBF5FF',
              borderRadius: 8,
              marginHorizontal: 25,
            }}>
            Semua
          </Text>
          <Text style={{color: '#1F2937', marginHorizontal: 25}}>
            Wisata Alam
          </Text>
          <Text style={{color: '#1F2937', marginHorizontal: 25}}>
            Wisata Air
          </Text>
          <Text style={{color: '#1F2937', marginHorizontal: 25}}>
            Wisata Kuliner
          </Text>
        </View>
      </ScrollView>
      <ScrollView
        style={{
          height: '75%',
        }}>
        {/* Row 1 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: 25,
            width: '100%',
          }}>
          <DestinationsCard
            path={require('../img/PantaiSerdang.png')}
            title="Pantai Serdang"
          />
          <DestinationsCard
            path={require('../img/PatungDewiKwanIm.png')}
            title="Pihara Patung Dewi Kwan Im"
          />
        </View>
        {/* End of Row 1 */}
        {/* Row 2 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: 25,
          }}>
          <DestinationsCard
            path={require('../img/ReplikaSD.png')}
            title="Replika SD Laskar Pelangi"
          />
          <DestinationsCard
            path={require('../img/PantaiNyiurMelambai.png')}
            title="Pantai Nyiur Melambai"
          />
        </View>
        {/* End of Row 2 */}
        {/* Row 1 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: 25,
            width: '100%',
          }}>
          <DestinationsCard
            path={require('../img/PantaiSerdang.png')}
            title="Pantai Serdang"
          />
          <DestinationsCard
            path={require('../img/PatungDewiKwanIm.png')}
            title="Pihara Patung Dewi Kwan Im"
          />
        </View>
        {/* End of Row 1 */}
        {/* Row 2 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: 25,
          }}>
          <DestinationsCard
            path={require('../img/ReplikaSD.png')}
            title="Replika SD Laskar Pelangi"
          />
          <DestinationsCard
            path={require('../img/PantaiNyiurMelambai.png')}
            title="Pantai Nyiur Melambai"
          />
        </View>
        {/* End of Row 2 */}
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default DestinationsPage;
