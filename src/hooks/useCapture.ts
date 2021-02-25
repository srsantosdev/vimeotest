import { useCallback, useState } from 'react';
import VimeoPlayer from '@vimeo/player';

type RegisterRefOptions = {
  ref: HTMLIFrameElement | null;
};

type CaptureHook = {
  registerRef: (options: RegisterRefOptions) => void;
  playerActions: VimeoPlayer | undefined;
};

export function useCapture(): CaptureHook {
  const [player, setPlayer] = useState<VimeoPlayer>();

  const registerRef = useCallback(({ ref }: RegisterRefOptions) => {
    if (ref) {
      const instancePlayer = new VimeoPlayer(ref);
      setPlayer(instancePlayer);
    }
  }, []);

  player?.on('play', data => {
    console.log('Play Event: ', data);
  });

  player?.on('pause', data => {
    console.log('Pause Event: ', data);
  });

  return {
    registerRef,
    playerActions: player,
  };
}
