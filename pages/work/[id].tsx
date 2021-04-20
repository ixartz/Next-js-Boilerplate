import React from 'react';

import Image from 'next/image';

import { Meta } from '../../layout/Meta';
import { Main } from '../../layout/Main';
import { getPageData, getAllPageIds } from '../../utils/generatePages';

export async function getStaticPaths() {
  const paths = await getAllPageIds('_work');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPageData(params.id, '_work');
  return {
    props: {
      postData,
    },
  };
}

const metaInfo = ['what', 'role', 'with', 'when'];

function MetaBlock(props) {
  return (
    <div className="">
      <p className="uppercase py-0 text-sm opacity-50">{props.title}</p>
      <p className="my-0">{props.text}</p>
    </div>
  );
}

export default function Post({ postData }) {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <p className="font-bold mb-4">{postData.name}</p>
      <h1 className="text-2xl md:text-5xl font-bold">{postData.headline}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 border-t border-b border-gray-100 dark:border-gray-800 py-4">
        {metaInfo.map((item) => postData[item] && <MetaBlock title={item} text={postData[item]} />)}
      </div>
      {postData.coverbg && (
        <div className="relative w-full h-80 my-8">
          <Image
            src={postData.coverbg}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      {postData.summary && <p className="text-xl mb-12">{postData.summary}</p>}
      <article
        className="prose prose-lg dark:prose-dark"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Main>
  );
}
