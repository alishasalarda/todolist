import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/planets-simple-phone-5ypoo11cciaeo24z.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Landing Page</Text>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#483A6E',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#483A6E',
            },
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#483A6E',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#483A6E',
            },
          ]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Register</Text>
        </TouchableOpacity>

        <Image source={{ uri: 'https://cdn.pixabay.com/animation/2022/07/31/06/27/06-27-17-124_512.gif' }} style={styles.logo} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 180,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: 40, 
  },
});

export default LandingPage;
