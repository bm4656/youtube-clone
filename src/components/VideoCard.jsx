import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li
      onClick={() =>
        // navigate 사용 시 앞에 절대경로(/) 사용하지 않을 시 현재 경로에서 추가로 가게 됨. 루트 경로 바로 뒤에 붙여서 가고 싶으면 꼭!
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
