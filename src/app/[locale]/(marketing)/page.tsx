import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/libs/I18nNavigation';

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: IndexPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const posts = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    date: '2025-04-21',
    excerpt: 'An introduction to this blog and what you can expect to find here.',
  },
  {
    slug: 'second-post',
    title: 'Second post',
    date: '2025-04-20',
    excerpt: 'More thoughts and ideas worth sharing with the world.',
  },
  {
    slug: 'third-post',
    title: 'Third post',
    date: '2025-04-19',
    excerpt: 'Keep writing, keep shipping.',
  },
];

export default async function IndexPage(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Index' });

  return (
    <div className="mt-8">
      <p className="text-sm text-gray-500">{t('tagline')}</p>
      <ul className="mt-8 space-y-8">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs text-gray-400">{post.date}</p>
              <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-1 text-base text-gray-600">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
