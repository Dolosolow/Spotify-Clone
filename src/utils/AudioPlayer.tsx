import { Audio } from "expo-av";
import moment from "moment";

export class AudioPlayer {
  audioPlayer: Audio.Sound;

  constructor() {
    this.initializePlayer();
    this.audioPlayer = new Audio.Sound();
  }

  private initializePlayer = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true, staysActiveInBackground: true });
    } catch (error) {
      console.log(error);
    }
  };

  static formatTimeDuration = (millisec: number) => {
    return `${moment(millisec).format("m:ss")}`;
  };

  loadAudio = async (audio: NodeRequire | any) => {
    await this.audioPlayer.loadAsync(audio, { shouldPlay: false });
  };

  pauseAudio = async () => {
    try {
      await this.audioPlayer.pauseAsync();
      return await this.getAudioPosition();
    } catch (error) {
      console.log(error);
    }
  };

  playAudio = async (audio: NodeRequire | any) => {
    try {
      if (!this.audioPlayer._loaded) {
        await this.audioPlayer.loadAsync(audio, { shouldPlay: false });
      }
      await this.audioPlayer.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  playAudioAfterPause = async () => {
    const startPosition = await this.getAudioPosition();

    try {
      await this.audioPlayer.setPositionAsync(startPosition);
      await this.audioPlayer.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  playNewAudio = async (audio: NodeRequire | any) => {
    try {
      await this.audioPlayer.unloadAsync();
      if (!this.audioPlayer._loaded || !this.audioPlayer._loading) {
        await this.audioPlayer.loadAsync(audio);
      }
      await this.audioPlayer.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  setAudioPosition = async (position: number = 0) => {
    try {
      await this.pauseAudio();
      await this.audioPlayer.setPositionAsync(position);
      await this.audioPlayer.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  getAudioPosition = async () => {
    const results: any = await this.audioPlayer.getStatusAsync();
    return results.positionMillis;
  };

  getAudioDuration = async () => {
    const results: any = await this.audioPlayer.getStatusAsync();
    return results.durationMillis;
  };
}
