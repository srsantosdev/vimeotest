import React, { useEffect, useRef } from 'react';

import { useCapture } from '../../hooks';
import { Container } from './styles';

const Player: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { registerRef } = useCapture();

  useEffect(() => {
    registerRef({
      ref: iframeRef.current,
    });
  }, [registerRef]);

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
