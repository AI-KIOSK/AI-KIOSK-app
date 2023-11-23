import CheckPhotoModal from '@components/modal/common/CheckPhotoModal';
import useAudio from '@hooks/useAudio';
import { useModal } from '@hooks/useModal';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState } from 'recoil';
import { capturedImage } from 'recoil/auth/atom';
import styled from 'styled-components';

function FaceRecognition() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useRecoilState(capturedImage);
  const { play, isLoading } = useAudio(require('../assets/audio/photo.mp3'));

  const cameraRef = useRef(null);
  const { navigate } = useNavigation();
  const { openModal } = useModal('checkPhotoModal');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (isLoading) play();
  }, [isLoading, play]);

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

    setCapturedPhoto(photo);
    openModal();
  };

  return (
    <Container>
      <CameraContainer>
        <Camera style={{ flex: 1 }} type={type} ref={cameraRef}></Camera>
        <ImageContainer>
          <ImageBackground source={require('../assets/faceGuideLine1.png')} />
        </ImageContainer>
      </CameraContainer>
      <TextContainer>
        <Guide>가능한 안내선에 맞게 촬영해주세요.</Guide>
      </TextContainer>
      <ButtonContainer>
        <Button onPress={() => navigate('information')}>
          <Label>뒤로가기</Label>
        </Button>
        <Button onPress={takePictureHandler}>
          <Label>사진 찍기</Label>
        </Button>
      </ButtonContainer>
      <CheckPhotoModal />
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

const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 105%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const ImageBackground = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(20)}px;
`;

const Guide = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;

const Button = styled.TouchableOpacity`
  width: ${wp(32)}px;
  height: ${hp(6)}px;
  justify-content: center;
  align-items: center;
  background-color: #abc4aa;
  border-color: #f3deba;
  border-width: 3px;
  border-radius: 8px;
`;

const Label = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;

export default FaceRecognition;
