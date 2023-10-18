import { ModalActionButton } from '@components/common/btn';
import { useModal } from '@hooks/common';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import format from 'pretty-format';
import React from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilState, useRecoilValue } from 'recoil';
import { capturedImage } from 'recoil/auth/atom';
import { userInfo } from 'recoil/user/atom';
import { styled } from 'styled-components';
import ModalTemplate from 'styles/ModalTemplate';

function CheckPhotoModal(img) {
  const { modal, hideModal } = useModal('checkPhotoModal');
  const capturedPhoto = useRecoilValue(capturedImage);
  const [user, setUser] = useRecoilState(userInfo);
  const navigation = useNavigation();

  const onPressConfirm = () => {
    // axios.get
    // API로 유저 정보 받아오기

    console.log(`image: ${capturedPhoto.width}`);
    axios
      .post('https://ai.cloudyong.store', {
        img: capturedPhoto.base64,
      })
      .then((res) => {
        const {
          data: { age, gender, nationality },
        } = res;

        switch (nationality) {
          case 'EASTERN':
            if (age !== '노년') navigation.navigate('youngmanHome', { age, gender });
            else navigation.navigate('seniorHome', { age, gender });
            break;
          case 'WESTERN':
            navigation.navigate('foreignerHome', { age, gender });
            break;
          default:
            break;
        }
        hideModal();
      })
      .catch((err) => {});
  };

  return (
    <Modal visible={modal.visible} transparent={true} animationType="slide" onRequestClose={hideModal}>
      <ModalTemplate>
        <Container>
          <ImagePreviewContainer>
            <ImagePreview source={{ uri: capturedPhoto['uri'] }} />
          </ImagePreviewContainer>
          <ButtonSection>
            <ModalActionButton title={'취소'} width={wp(30)} height={hp(6)} color={'cancel'} onPress={hideModal} />
            <ModalActionButton title={'KIOSK 시작'} width={wp(30)} height={hp(6)} color={''} onPress={onPressConfirm} />
          </ButtonSection>
        </Container>
      </ModalTemplate>
    </Modal>
  );
}

const Container = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: ${wp(3)}px;
`;

const ImagePreviewContainer = styled.View`
  flex: 5;
  align-items: center;
`;

const ImagePreview = styled.Image`
  width: 100%;
  height: 100%;
`;

const ButtonSection = styled.View`
  width: ${wp(70)}px;
  flex: 1;

  justify-content: space-between;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default CheckPhotoModal;
