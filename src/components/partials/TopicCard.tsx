import React from 'react';

import type { Topic } from '@/services/topicApi';

export default function TopicCard({ topic }: { topic: Topic }) {
  const {
    title,
    thumbnail_url,
    views_count,
    comments_count,
    votes_count,
    author,
    created_time,
    tags,
    category,
  } = topic;

  return (
    <div
      className="mb-4 cursor-pointer rounded-md bg-primary-100 p-4 shadow-md"
      onClick={() => {
        window.open(`https://www.pantip.com/topic/${topic.topic_id}`, '_blank');
      }}
      title={`กดเพื่ออ่าน: ${title}`}
    >
      {thumbnail_url && (
        <img src={thumbnail_url} alt={title} className="mb-4 rounded-lg" />
      )}
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="mb-2 flex items-center text-sm text-gray-600">
        <span className="mr-2">Views: {views_count}</span>
        <span className="mr-2">Comments: {comments_count}</span>
        <span className="mr-2">Votes: {votes_count}</span>
      </div>
      <div className="mb-2 flex items-center">
        <img
          src={author.avatar.medium}
          alt={author.name}
          className="mr-2 size-8 rounded-full"
        />
        <span>{author.name}</span>
      </div>
      <div className="mb-2 text-sm text-gray-600">
        <span>Category: {category}</span>
        <span className="mx-2">•</span>
        <span>Created: {created_time}</span>
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag.slug}
            className="mb-2 mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
