import { Audio } from 'expo-av';
import { useEffect, useMemo, useState } from 'react';

function useAudio(resource) {
  const [sound, setSound] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const isResourceDefined = useMemo(() => {
    if (resource) return true;
    else return false;
  }, [resource]);

  useEffect(() => {
    async function initSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(resource);
      setSound(sound);
      setIsLoading(true);
    }
    if (isResourceDefined) {
      initSound();
    }
  }, [isResourceDefined, resource]);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function play() {
    if (sound) await sound.playAsync();
  }

  return { play, isLoading };
}

export default useAudio;
