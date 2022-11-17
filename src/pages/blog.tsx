import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Blog = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>

    {[...Array(10)].map((_, index) => {
      return (
        <Link href={`/blog/blog-${index}`} key={index}>
          <div className="my-4 block w-full rounded-md border-2 border-gray-400 py-1 px-2">{`Blog - ${index}`}</div>
        </Link>
      );
    })}
  </Main>
);

export default Blog;
