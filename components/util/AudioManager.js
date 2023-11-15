import useFocus from '@hooks/useFocus';
import { useFocusEffect } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { useEffect, useMemo, useState } from 'react';

const AudioManager = ({ children }) => {
  const [sound, setSound] = useState();

  const { curFocus } = useFocus();
  console.log(`audioManager curFocus${curFocus}`);
  const audio = useMemo(() => {
    const selector = {
      MAIN: require('@assets/audio/senior.mp3'),
      MODAL_OPTION: require('@assets/audio/seniorOption.mp3'),
      MODAL_ORDER_CONFIRM: require('@assets/audio/orderlist.mp3'),
      MODAL_EARNING_POINT: require('@assets/audio/point.mp3'),
      MODAL_BEVERAGE_DETAIL: require('@assets/audio/beverageInfo.mp3'),
      MODAL_SIGNUP: require('@assets/audio/signup.mp3'),
      MODAL_SIGNUP_COMPLETE: require('@assets/audio/signupcomplete.mp3'),
      MODAL_PAYMENT: require('@assets/audio/payment.mp3'),
      MODAL_PAYMENT_COMPLETE: require('@assets/audio/ordercomplete.mp3'),
      '': null,
    };

    return selector[curFocus];
  }, [curFocus]);

  const isResourceDefined = useMemo(() => {
    if (audio) return true;
    else return false;
  }, [audio]);

  useEffect(() => {
    async function initSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(audio);
      setSound(sound);
      if (sound) {
        if (curFocus === '') {
          console.log('unload');
          await sound.unloadAsync();
        } else {
          console.log('play');
          await sound.playAsync();
        }
      }
    }
    if (isResourceDefined) {
      initSound();
    }
  }, [audio, curFocus, isResourceDefined]);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function stopAudio() {
    if (curFocus === '') await sound.unloadAsync();
  }

  return children;
};

export default AudioManager;
