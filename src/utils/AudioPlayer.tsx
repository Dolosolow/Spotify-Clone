import { Audio } from "expo-av";
import moment from "moment";

export class AudioPlayer {
  private static _instance: AudioPlayer = new AudioPlayer();

  audioPlayer: Audio.Sound;

  constructor() {
    if (AudioPlayer._instance) {
      throw new Error("Error: Use AudioPlayer.getInstance() instead of new");
    } else {
      this.initializePlayer();
      AudioPlayer._instance = this;
      this.audioPlayer = new Audio.Sound();
    }
  }

  static getInstance = () => {
    return AudioPlayer._instance;
  };

  private initializePlayer = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true, staysActiveInBackground: true });
    } catch (error) {
      console.log(error);
    }
  };

  static formatTimeDuration = (millisec: number) => {
    if (millisec) {
      return `${moment(millisec).format("m:ss")}`;
    }
    return `0:00`;
  };

  loadAudio = async (audio: NodeRequire | any) => {
    try {
      await this.audioPlayer.loadAsync(audio, { shouldPlay: false, positionMillis: 0 });
    } catch (err) {
      console.log(err);
    }
  };

  pauseAudio = async () => {
    try {
      if (this.audioPlayer._loaded) {
        await this.audioPlayer.pauseAsync();
        return await this.getAudioPosition();
      }
    } catch (error) {
      console.log(error);
    }
  };

  playAudio = async (resume?: boolean) => {
    try {
      if (resume) {
        const startPosition = await this.getAudioPosition();
        await this.audioPlayer.setPositionAsync(startPosition);
      }

      if (this.audioPlayer._loaded) {
        await this.audioPlayer.playAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  playNewAudio = async (audio: NodeRequire | any) => {
    try {
      if (this.audioPlayer._loaded) {
        await this.audioPlayer.stopAsync();
        await this.audioPlayer.unloadAsync();
      }

      if (!this.audioPlayer._loaded || !this.audioPlayer._loading) {
        await this.audioPlayer.loadAsync(audio, { shouldPlay: true, positionMillis: 0 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  setAudioPosition = async (position: number = 0) => {
    try {
      await this.audioPlayer.setPositionAsync(position);
    } catch (error) {
      console.log(error);
    }
  };

  getAudioPosition = async () => {
    try {
      let results: any;

      if (this.audioPlayer._loaded) {
        results = await this.audioPlayer.getStatusAsync();
      }

      return results.positionMillis;
    } catch (err) {
      console.log(err);
    }
  };

  getAudioDuration = async () => {
    try {
      let results: any;

      if (this.audioPlayer._loaded) {
        results = await this.audioPlayer.getStatusAsync();
      }

      return results.durationMillis;
    } catch (err) {
      console.log(err);
    }
  };

  getFullAudioProgress = async () => {
    if (this.audioPlayer._loaded) {
      const audioSeek: any = await this.audioPlayer.getStatusAsync();

      return {
        audioPosition: audioSeek.positionMillis,
        audioDuration: audioSeek.durationMillis,
      };
    }
  };
}
