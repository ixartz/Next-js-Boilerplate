/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { log } from 'scrapfly-sdk-fetch';

import { getBaseUrl } from '@/utils/Helpers';

import Announce from './components/Announce';
import Highlight from './components/Highlight';
import PantipRealtime from './components/PantipRealtime';
import Room from './components/Room';

log.setLevel('DEBUG');

export interface IPantipData {
  title: string;
  link: string;
}

const PantipPage = () => {
  const { data: announceData } = useQuery({
    queryKey: ['get_announce'],
    queryFn: async () => {
      const apiResponse = await axios.get(`${getBaseUrl()}/api/get-announce`, {
        params: {
          url: 'https://pantip.com/',
        },
      });
      return apiResponse.data;
    },
  });

  const { data: roomData } = useQuery({
    queryKey: ['get_room'],
    queryFn: async () => {
      const apiResponse = await axios.get(`${getBaseUrl()}/api/get-room`, {
        params: {
          url: 'https://pantip.com/',
        },
      });
      return apiResponse.data;
    },
  });

  const { data: highLightData } = useQuery({
    queryKey: ['get_highlight'],
    queryFn: async () => {
      const apiResponse = await axios.get(`${getBaseUrl()}/api/get-highlight`, {
        params: {
          url: 'https://pantip.com/',
        },
      });
      return apiResponse.data;
    },
  });

  const { data: pantipRealtimeData } = useQuery({
    queryKey: ['get_realtime'],
    queryFn: async () => {
      const apiResponse = await axios.get(
        `${getBaseUrl()}/api/get-pantip-realtime`,
        {
          params: {
            url: 'https://pantip.com/',
          },
        },
      );
      return apiResponse.data;
    },
  });

  return (
    <div>
      <div className="px-4 pt-4 text-center">
        <p className=" text-2xl font-semibold">Pantip </p>
        <p className=" text-base font-medium text-gray-700 ">
          Learn, Share & Fun
        </p>
      </div>
      {announceData && <Announce data={announceData} />}
      {roomData && <Room data={roomData} />}
      {highLightData && <Highlight data={highLightData} />}
      {roomData && <Room data={roomData} />}
      {pantipRealtimeData && <PantipRealtime data={pantipRealtimeData} />}
    </div>
  );
};

export default PantipPage;
