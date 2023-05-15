import { AppConfig } from 'src/config/AppConfig';

export default function Head() {
  return (
    <>
      <title>{AppConfig.title}</title>
      <meta property='og:title' content={AppConfig.title} />
      <meta property='og:description' content={AppConfig.description} />
      <meta name='description' content={AppConfig.description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </>
  );
}
