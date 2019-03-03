import * as React from "react";

export interface YoutubePlayerProps {
  /** @name Video ID @default gZT13EKfZXg @group Video */
  video?: string;

  /** @name Autoplay @default false @group Video */
  autoplay?: boolean;

  /** @name Mute @default false @group Video */
  mute?: boolean;

  /** @name Color @default Red @group Styling */
  color?: YoutubePlayerColor;

  /** @name Controls @default true @group Styling */
  controls?: boolean;

  /** @name Allow Fullscreen @default true @group Styling */
  fs?: boolean;

  /** @name Hide YouTube Logo @default false @group Styling */
  modestbranding?: boolean;

  /** @name Width @default 640px @group Size */
  width?: string;
}

export enum YoutubePlayerColor {
  White = 'white',
  Red = 'red'
}

/** 
 * @name YouTube Player
 * @icon Youtube
 */
export const YoutubePlayer: React.SFC<YoutubePlayerProps> = props => {
  const url = `https://www.youtube.com/embed/${props.video}?autoplay=${translateValue(props.autoplay)}&controls=${translateValue(props.controls)}&fs=${translateValue(props.fs)}&modestbranding=${translateValue(props.modestbranding)}&color=${props.color}&mute=${translateValue(props.mute)}`;

  return (
    <div style={{
      width: props.width
    }}>
      <div style={{
        padding: '56.25% 0 0 0',
        position: 'relative',
      }}>
        <iframe width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderWidth: 0
        }} />
      </div>
    </div>
  );
};

function translateValue(value: boolean | undefined): number {
  return value ? 1 : 0;
}
