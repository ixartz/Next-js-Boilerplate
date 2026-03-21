import Image from 'next/image';
import arcjetLogo from '@/public/assets/images/arcjet-light.svg';
import betterStackLogo from '@/public/assets/images/better-stack-dark.png';
import checklyLogo from '@/public/assets/images/checkly-logo-light.png';
import clerkLogo from '@/public/assets/images/clerk-logo-dark.png';
import codeRabbitLogo from '@/public/assets/images/coderabbit-logo-light.svg';
import crowdinLogo from '@/public/assets/images/crowdin-dark.png';
import nextJsBoilerplateLogo from '@/public/assets/images/nextjs-boilerplate-saas.png';
import posthogLogo from '@/public/assets/images/posthog-logo.svg';
import sentryLogo from '@/public/assets/images/sentry-dark.png';

export const Sponsors = () => (
  <table className="border-collapse">
    <tbody>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
            <Image
              src={clerkLogo}
              alt="Clerk – Authentication & User Management for Next.js"
              width={220}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025">
            <Image src={codeRabbitLogo} alt="CodeRabbit" width={220} />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
            <Image src={sentryLogo} alt="Sentry" width={220} />
          </a>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://launch.arcjet.com/Q6eLbRE">
            <Image src={arcjetLogo} alt="Arcjet" width={220} />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://l.crowdin.com/next-js">
            <Image src={crowdinLogo} alt="Crowdin" width={220} />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
            <Image src={betterStackLogo} alt="Better Stack" width={220} />
          </a>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
            <Image src={posthogLogo} alt="PostHog" width={220} />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
            <Image src={checklyLogo} alt="Checkly" width={220} />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
            <Image
              src={nextJsBoilerplateLogo}
              alt="Next.js SaaS Boilerplate"
              width={220}
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);
