import * as React from "react";

import Image from "next/image";

import hydrate from "next-mdx-remote/hydrate";

import ImageGrid from "../../components/ImageGrid";
import { WidthContainer } from "../../components/WidthContainer";
import { Main } from "../../layout/Main";
import { Meta } from "../../layout/Meta";
import { getPageData, getAllPageIds } from "../../utils/generatePages";

export async function getServerSidePaths() {
  const paths = await getAllPageIds("_work");
  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps({ params }: { params: any }) {
  const { mdxSource, data } = await getPageData(params.id, "_work");

  if (data.redirect) {
    return {
      redirect: {
        destination: data.redirect,
        permanent: false,
      },
    };
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

const cloudinary = ({ src, width, quality }) => {
  //return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  return `https://res.cloudinary.com/samstephenson/image/upload/${src}`;
};

// Pass in needed components here
const components = {
  WidthContainer,
  ImageGrid,
  img: image => (
    <div className="relative w-full pt-[66%]">
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="contain"
        loader={cloudinary}
      />
    </div>
  ),
};

const metaInfo = ["what", "role", "whoWith", "when"];

function MetaBlock(props) {
  return (
    <div className="">
      <p className="uppercase pb-1 text-xs text-secondary">{props.title}</p>
      <p className="my-0">{props.text}</p>
    </div>
  );
}

export default function Post({ source, frontMatter }) {
  const content = hydrate(source, { components });

  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      <WidthContainer>
        <p className="font-bold mb-4">{frontMatter.name}</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          {frontMatter.headline}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 border-t border-b border-gray-100 dark:border-gray-800 py-4">
          {metaInfo.map(
            item =>
              frontMatter[item] && (
                <MetaBlock
                  title={item == "whoWith" ? "with" : item}
                  text={frontMatter[item]}
                />
              )
          )}
        </div>
      </WidthContainer>

      {frontMatter.coverbg && (
        <div className="relative w-full pt-[50%] my-8">
          <Image
            src={frontMatter.coverbg}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <WidthContainer>
        {frontMatter.summary && (
          <p className="text-xl mb-12">{frontMatter.summary}</p>
        )}
      </WidthContainer>
      <article className="mx-auto prose prose-lg dark:prose-dark max-w-none">
        <WidthContainer>{content}</WidthContainer>
      </article>

      {frontMatter.bottomEmbed && (
        <WidthContainer size="lg">
          <iframe
            width="100%"
            height="720"
            src={frontMatter.bottomEmbed}
          ></iframe>
        </WidthContainer>
      )}
    </Main>
  );
}
