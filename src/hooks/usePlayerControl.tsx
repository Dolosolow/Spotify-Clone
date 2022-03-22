import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AudioPlayer } from "@local/utils/AudioPlayer";
import { setCurrentIndex, pausePlayAudio } from "@local/store/actions";

import type { Store } from "@local/store/redux_store";

const player = AudioPlayer.getInstance();

export const usePlayerControl = (qplayer?: boolean) => {
  const { currentIndex, isPlaying } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const [rtPosition, setRtPosition] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);

  const playNextTrack = async (id: string, mp3: any) => {
    if (!isPlaying) dispatch(pausePlayAudio(true));

    if (currentIndex !== Number(id)) {
      await player.playNewAudio(mp3);
      dispatch(setCurrentIndex(Number(id)));
    }

    const audioDuration = await player.getAudioDuration();
    const audioRtPosition = await player.getAudioPosition();

    setRtPosition(audioRtPosition);
    setTrackDuration(audioDuration);
  };

  const setPlayState = async () => {
    if (isPlaying) {
      dispatch(pausePlayAudio(false));
      await player.pauseAudio();
    } else {
      dispatch(pausePlayAudio(true));
      await player.playAudio(true);
    }
  };

  useEffect(() => {
    if (player.audioPlayer._loaded) {
      let timer: any;

      const getPosition = async () => {
        const audioPosition = await player.getAudioPosition();
        setRtPosition(audioPosition);
      };

      const getDuration = async () => {
        const audioDuration = await player.getAudioDuration();
        setTrackDuration(audioDuration);
      };

      timer = setTimeout(() => {
        if (trackDuration === 0) {
          getDuration();
        }

        getPosition();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPlaying, rtPosition, qplayer]);

  return {
    rtPosition,
    trackDuration,
    playNextTrack,
    setPlayState,
  };
};
