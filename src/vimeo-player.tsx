import * as React from "react";

export interface VimeoPlayerProps {
    /** @name Video ID @default 290884418 @group Video */
    video?: string;

    /** @name Autoplay @default false @group Video */
    autoplay?: boolean;

    /** @name Loop @default false @group Video */
    loop?: boolean;

    /** @name Author @default true @group Styling */
    byline?: boolean;

    /** @name Profile @default true @group Styling */
    portrait?: boolean;

    /** @name Title @default true @group Styling */
    title?: boolean;

    /** @name Color @description Only for videos hosted with a Plus account or higher @default 00adef @group Styling */
    color?: string;
}

/** 
 * @name Vimeo Player
 * @icon Video
 */
export const VimeoPlayer: React.SFC<VimeoPlayerProps> = props => {
  const url = `https://player.vimeo.com/video/${props.video}?autoplay=${translateValue(props.autoplay)}&loop=${translateValue(props.loop)}color=${props.color}&byline=${translateValue(props.byline)}&portrait=${translateValue(props.portrait)}&title=${translateValue(props.title)}`;

  return (
    <iframe src={url} width="640" height="360" frameBorder="0" allowFullScreen></iframe>
  );
};

function translateValue(value: boolean | undefined): number {
  return value ? 1 : 0;
}

