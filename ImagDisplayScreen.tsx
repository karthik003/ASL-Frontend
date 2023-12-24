import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

const ImageDisplayScreen = ({ route }) => {
  // Check if imageUris are provided in route.params, otherwise set an empty array
  const [imageUris, setImageUris] = useState(route.params?.imageUris || []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (currentImageIndex >= imageUris.length) {
      setCurrentImageIndex(0);
    }
  }, [imageUris, currentImageIndex]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex + 1 < imageUris.length ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  useEffect(() => {
    console.log('Received image URIs:', imageUris.length);
  }, [imageUris]);
  
  return (
    <View style={styles.container}>
      {imageUris.length > 0 ? (
        <>
          <Image
            source={{ uri: imageUris[currentImageIndex] }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.buttonContainer}>
            <Button title="Previous" onPress={goToPreviousImage} disabled={currentImageIndex === 0} />
            <Button title="Next" onPress={goToNextImage} disabled={currentImageIndex === imageUris.length - 1} />
          </View>
        </>
      ) : (
        <Text>No images available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default ImageDisplayScreen;
