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

  /** @name Show Controls @default true @group Styling */
  controls?: boolean;

  /** @name Allow Fullscreen @default true @group Styling */
  fs?: boolean;

  /** @name Hide YouTube Logo @default false @group Styling */
  modestbranding?: boolean;

  /** @name Plays Inline @default false @group Styling */
  playsinline?: boolean;
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
  const parameters = `https://www.youtube.com/embed/${props.video}?autoplay=${translateValue(props.autoplay)}&controls=${translateValue(props.controls)}&fs=${translateValue(props.fs)}&modestbranding=${translateValue(props.modestbranding)}&playsinline=${translateValue(props.playsinline)}&color=${props.color}&mute=${translateValue(props.mute)}`;

  // ${props.start && `&start=${props.start}`}${props.end && `&end=${props.end}`}
  return (
    <>
      <iframe width="560" height="315" src={parameters} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      {parameters}
    </>
  );
};

function translateValue(value: boolean | undefined): number {
  return value ? 1 : 0;
}
