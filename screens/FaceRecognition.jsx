import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components';

function FaceRecognition() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type] = useState(Camera.Constants.Type.front);
  const [capturedImage, setCapturedImage] = useState(null);

  const cameraRef = useRef(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePictureHandler = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync({
      base64: true,
    });

    setCapturedImage(photo);
  };

  return (
    <Container>
      <CameraContainer>
        <Camera style={{ flex: 1 }} type={type} ref={cameraRef}></Camera>
      </CameraContainer>
      <ButtonContainer>
        <Button onPress={takePictureHandler}>
          <Label>사진 찍기</Label>
        </Button>
        <Button onPress={() => navigate('information')}>
          <Label>뒤로가기</Label>
        </Button>
      </ButtonContainer>
      {capturedImage && (
        <ImagePreviewContainer>
          <ImagePreview source={{ uri: capturedImage.uri }} />
        </ImagePreviewContainer>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CameraContainer = styled.View`
  flex: 5;
  width: 100%;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  width: ${wp(32)}px;
  height: ${hp(6)}px;
  justify-content: center;
  align-items: center;
  background-color: #ABC4AA;
  border-color: #000000;
  border-width: 3px;
  border-radius: 8px;
`;

const Label = styled.Text`
  font-size: ${RFValue(12)}px;
`;

const ImagePreviewContainer = styled.View`
  flex: 4;
  align-items: center;
`;

const ImagePreview = styled.Image`
  width: ${wp(80)}px;
  height: ${hp(40)}px;
`;

export default FaceRecognition;
