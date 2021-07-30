import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function ProjectThumb({ project, className = '' }) {
  return (
    <Link href={`work/${project.id}`} key={project.id}>
      <a
        className={`hover:no-underline text-primary md:w-[40vw] xl:w-[25vw] flex-none ${className}`}
      >
        <div className="relative pt-[150%] bg-surface-100 hover:bg-surface-200 transition mb-2">
          <Image src={project.thumbnail} layout="fill" objectFit="contain" />
        </div>
        <p>
          {project.name}
          &#58;&nbsp;
          <span className="text-secondary">{project.headline}</span>
        </p>
      </a>
    </Link>
  );
}
