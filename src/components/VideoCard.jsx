import React from 'react';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{channelTitle}</p>
        <p>{format(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
