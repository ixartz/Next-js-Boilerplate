import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { useGetRecommendRoomsQuery } from '@/services/roomApi';

import TagIcon from './partials/TagIcon';

export default function RoomRecommend() {
  const { data: recommendRooms, isFetching: isLoadingRecommendRooms } =
    useGetRecommendRoomsQuery('');

  const [roomPage, setRoomPage] = useState(0);
  const roomLimit = 20;
  return (
    <div className="relative flex items-center justify-center gap-4">
      <FaArrowLeft
        className="absolute left-0 rounded-full bg-primary-50 p-1 text-xl text-primary-700"
        onClick={() => {
          if (roomPage > 0) {
            setRoomPage(roomPage - 1);
          }
        }}
      />
      <div className="grid grid-cols-5 gap-4 md:flex md:items-center">
        {recommendRooms
          ?.slice(roomPage * roomLimit, (roomPage + 1) * roomLimit)
          .map((room) => (
            <TagIcon
              key={room.id}
              icon={
                <img
                  src={
                    room.slug
                      ? `https://ptcdn.info/mobile/icon_room/pt-forum-${room.slug}.svg`
                      : 'https://ptcdn.info/mobile/icon_room/pt-forum-all.svg'
                  }
                />
              }
              isLoading={isLoadingRecommendRooms}
              href={`https://pantip.com/forum/${room.slug}`}
              title={room.name}
            />
          ))}
      </div>
      <FaArrowRight
        className="absolute right-0 rounded-full bg-primary-50 p-1 text-xl text-primary-700"
        onClick={() => {
          if (roomPage < Math.floor(recommendRooms?.length || 0 / roomLimit)) {
            const newRoomPage = roomPage + 1;
            const newRooms = recommendRooms?.slice(
              newRoomPage * roomLimit,
              (newRoomPage + 1) * roomLimit,
            );
            if (newRooms?.length) {
              setRoomPage(newRoomPage);
            }
          }
        }}
      />
    </div>
  );
}
