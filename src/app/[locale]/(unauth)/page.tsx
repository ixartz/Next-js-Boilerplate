'use client';

import Highlight from '@/components/Highlight';
import InfiniteScroll from '@/components/InfiniteScroll';
import RoomRecommend from '@/components/RoomRecommend';

export default function Index() {
  return (
    <div className="">
      <RoomRecommend />
      <div className="h-8" />
      <Highlight />
      <div className="h-8" />
      <InfiniteScroll />
    </div>
  );
}
