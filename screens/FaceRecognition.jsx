import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

function FaceRecognition() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

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
    // cameraRef가 없으면 해당 함수가 실행되지 않게 가드
    if (!cameraRef.current) return;

    // takePictureAsync를 통해 사진을 찍습니다.
    // 찍은 사진은 base64 형식으로 저장합니다.
    await cameraRef.current
      .takePictureAsync({
        base64: true,
      })
      .then((data) => {
        setCapturedImage(data);
      });
  };

  return (
    <Container>
      <CameraContainer>
        <Camera style={{ flex: 1 }} type={type} ref={cameraRef}></Camera>
      </CameraContainer>
      <ButtonContainer>
        <Button onPress={takePictureHandler}>
          <Label>인식 시작</Label>
        </Button>

        <Button onPress={() => navigate('information')}>
          <Label>뒤로가기</Label>
        </Button>
      </ButtonContainer>
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

  background-color: #d9d9d9;
  border-color: #265183;
  border-width: 3px;
  border-radius: 24px;
`;

const Label = styled.Text`
  font-size: ${RFValue(12)}px;
`;

export default FaceRecognition;
