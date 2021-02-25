import React, { useEffect, useRef, useState } from 'react';
import VimeoPlayer from '@vimeo/player';

import { Container } from './styles';

const Player: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<VimeoPlayer | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const instancePlayer = new VimeoPlayer(iframe as HTMLIFrameElement);
    setPlayer(instancePlayer);
  }, []);

  useEffect(() => {
    async function getVideoData() {
      // const duration = await player?.getDuration();
      // const currentTime = await player?.getCurrentTime();
      // const played = await player?.getPlayed();
      // const videoTitle = await player?.getVideoTitle();
      // const volume = await player?.getVolume();
      // const muted = await player?.getMuted();
    }

    getVideoData();
  }, [player]);

  return (
    <Container>
      <iframe
        ref={iframeRef}
        id="player"
        src="https://player.vimeo.com/video/515698056"
        title="Conformity Pro"
        frameBorder="0"
      />
    </Container>
  );
};

export default Player;
