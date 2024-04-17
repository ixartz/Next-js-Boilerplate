import React from 'react';

import { useGetHighlightQuery } from '@/services/annoucementApi';

import { HorizontalScroll } from './partials/HorizontalScroll';

export default function Highlight() {
  const { data, isLoading } = useGetHighlightQuery();

  return (
    <div className="w-full">
      <HorizontalScroll
        imgs={data?.map((highlight) => highlight.image_url?.[0]) || []}
        hrefs={data?.map((highlight) => highlight.post_url) || []}
      />
    </div>
  );
}
