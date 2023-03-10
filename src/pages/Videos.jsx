import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/fake-youtube';
import Youtube from '../api/youtube';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  return (
    <div>
      Videos {keyword ? `🔎${keyword}` : '🔥'}
      {isLoading && <p>로딩중...</p>}
      {error && <p>Something is wrong!!</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
