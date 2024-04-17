import React, { useEffect } from 'react';

import { useGetNextTopicQuery } from '@/services/topicApi';

import TopicCard from './partials/TopicCard';

export default function InfiniteScroll() {
  const [page, setPage] = React.useState(1);
  const [ignoreList, setIgnoreList] = React.useState([]);

  const { data, isLoading, refetch } = useGetNextTopicQuery({
    limit: 10,
    ignoreList: ignoreList.flat(),
    nextId: page,
  });

  const [infiniteData, setInfiniteData] = React.useState<any>([]);

  const observer = React.useRef<IntersectionObserver>();
  const lastTopicElementRef = React.useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting && data?.has_next) {
          setPage((pv) => pv + 1);
          setIgnoreList((pv) => [
            ...pv,
            data.data.map((room) => room.room_name_en),
          ]);
          refetch();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, data?.has_next],
  );

  useEffect(() => {
    if (data) {
      data?.data && setInfiniteData((pv) => [...pv, ...data?.data]);
    }
  }, [data]);

  return (
    <div>
      {infiniteData.map((room, index) => {
        if (infiniteData.length === index + 1) {
          return (
            <div key={room.room_id} ref={lastTopicElementRef}>
              {room.topics.map((topic) => (
                <TopicCard key={topic.topic_id} topic={topic} />
              ))}
            </div>
          );
        }
        return (
          <div key={room.room_id}>
            {room.topics.map((topic) => (
              <TopicCard key={topic.topic_id} topic={topic} />
            ))}
          </div>
        );
      })}
      {isLoading && (
        <>
          <div className="flex animate-pulse flex-col gap-1">
            <div className="h-24 w-full rounded-lg bg-primary-50" />
            <div className="flex gap-2">
              <div className="h-8 w-full rounded-full bg-primary-50" />
              <div className="h-8 w-full rounded-full bg-primary-50" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-full rounded-full bg-primary-50" />
              <div className="h-8 w-full rounded-full bg-primary-50" />
            </div>
          </div>
          <div className="mt-8 flex animate-pulse flex-col gap-1">
            <div className="h-24 w-full rounded-lg bg-primary-50" />
            <div className="flex gap-2">
              <div className="h-8 w-full rounded-full bg-primary-50" />
              <div className="h-8 w-full rounded-full bg-primary-50" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-full rounded-full bg-primary-50" />
              <div className="h-8 w-full rounded-full bg-primary-50" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
