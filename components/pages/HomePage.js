import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://wallpapercrafter.com/th800/453240-Sci-Fi-Spaceship-Phone-Wallpaper.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome Home.</Text>
        <Image
          source={{
            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db2a5bcf-dfc1-4963-a8c1-f2dbc027c0a1/d6ly460-11f15afa-afed-4a5b-b171-da92e742ca73.png/v1/fill/w_1024,h_1024/plants_vs_zombies___sunflower_vector_by_2bitmarksman_d6ly460-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm5hbWUiOiJkZW1vIiwiaWF0IjoxNjIwOTkwMDIyLCJleHAiOjE2MjA5OTM2MjIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2RiMmE1YmNmLWRmYzEtNDk2My1hOGMxLWYyZGJjMDI3YzBhMVwvZDZseTQ2MC0xMWYxNWFmYS1hZmVkLTRhNWItYjE3MS1kYTkyZTc0MmNhNzMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1HB9dfVIxNsQLWK_1jFgNFuXEGdXrXcmnWqimoG_GLY',
          }}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Landing')}
          style={styles.powerOffButton}
        >
          <Icon name="power-off" size={30} color="#e021ba" style={styles.powerOffIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  powerOffButton: {
    backgroundColor: '#7C1332',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  powerOffIcon: {
    alignSelf: 'center',
    color: "#fff"
  },
});

export default HomePage;
