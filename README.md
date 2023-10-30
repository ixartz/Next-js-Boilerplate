# Boilerplate and Starter for Next JS 14+, Tailwind CSS 3.3 and TypeScript

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Boilerplate/"><img height="300" src="public/assets/images/nextjs-starter-banner.png?raw=true" alt="Next js starter banner"></a>
</p>

🚀 Boilerplate and Starter for Next.js with App Router and Page Router support, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, Netlify, PostCSS, Tailwind CSS, Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate), Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and [Turso](https://turso.tech/?utm_source=nextjsstarterbp)

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a [Next js templates demo](https://creativedesignsguru.com/demo/Nextjs-Boilerplate/).

## Sponsors

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/a3cd2a25-377b-4c0d-a3d3-bce121df2c94">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
          <img alt="Clerk – Authentication & User Management for Next.js" src="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
        </picture>
      </a>
    </td>
    <td width="33%">
      <a href="https://turso.tech/?utm_source=nextjsstarterbp">
        <img src="public/assets/images/turso.png?raw=true" alt="SQLite Developer Experience">
      </a>
    </td>
    <td width="33%">
      <a href="https://upstash.com/?utm_source=nextjs-boilerplate">
        <img src="https://raw.githubusercontent.com/upstash/sponsorship/master/redis.png" alt="Upstash">
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td style=width="33%">
      <a href="https://nextlessjs.com">
        <img src="public/assets/images/nextlessjs.png?raw=true" alt="React SaaS Boilerplate Next.js" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="mailto:contact@creativedesignsguru.com">
        Add your logo here
      </a>
    </td>
  </tr>
</table>

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) with App Router and Page Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 🔒 Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 📦 Type-safe ORM with DrizzleORM, compatible with SQLite, PostgreSQL, and MySQL
- 💽 Global Database with [Turso](https://turso.tech/?utm_source=nextjsstarterbp)
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form with React Hook From
- 🔴 Validation library with Zod
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual testing with Percy (Optional)
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⌘ Database exploration with Drizzle Studio and CLI migration tool with Drizzle Kit
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Easy to customize
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Set up authentication

Create a Clerk account at [Clerk.com](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) and create a new application in Clerk Dashboard. Then, copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` into `.env.local` file (not tracked by Git):

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now, you can a fully working authentication system with Next.js: Sign up, Sign in, Sign out, Forgot password, Reset password, Update profile, Update password, Update email, Delete account, and more.

### Set up remote database

The project uses DrizzleORM, a type-safe ORM compatible with SQLite, PostgreSQL, and MySQL databases. By default, the project is set up to work seamlessly with libSQL, and for production purposes, it's integrated with [Turso](https://turso.tech/?utm_source=nextjsstarterbp). The Next.js Boilerplate also enables a smooth transition to an alternative database provider if your project requires it.

First, you need to create a Turso account at [Turso.tech](https://turso.tech/?utm_source=nextjsstarterbp) and install the Turso CLI:

```shell
brew install tursodatabase/tap/turso
turso auth signup # Sign up to Turso
```

Then, create a new database:

```shell
turso db create nextjs-boilerplate
```

Now, you need to update the `DATABASE_URL` in `.env` file with the database URL provided by Turso:

```shell
turso db show nextjs-boilerplate --url

# .env
# DATABASE_URL=libsql://[RANDOM-CHARS]-[DB-NAME]-[ORG-NAME].turso.io
```

Finally, you also need to create a new environement variable `DATABASE_AUTH_TOKEN` in `.env.local` (not tracked by Git) with the auth token provided by Turso:

```shell
turso db tokens create nextjs-boilerplate

# .env.local
# DATABASE_AUTH_TOKEN=[your-auth-token]
```

### Project structure

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── layouts                     # Layouts components
│   ├── libs                        # 3rd party libraries
│   ├── models                      # Database models
│   ├── pages                       # Next JS Pages (page router)
│   ├── pages.test                  # Next JS Pages tests (this avoids tests to be treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme
- `next-sitemap.config.js`: sitemap configuration
- `.env`: default environment variables

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

### Enable Edge runtime (optional)

The App Router folder is compatible with the Edge runtime. You can enable it by uncommenting the following lines `src/app/layouts.tsx`:

```tsx
// export const runtime = 'edge';
```

For your information, the database migration is not compatible with the Edge runtime. So, you need to disable the automatic migration in `src/libs/DB.ts`:

```tsx
if (process.env.NODE_ENV !== 'production') {
  await migrate(db, { migrationsFolder: './migrations' });
}
```

After disabling it, you are required to run the migration manually with:

```shell
npm run db:migrate
```

You also require to run the command each time you want to update the database schema.

### Deploy to production

During the build process, the database migration is automatically executed. So, you don't need to run the migration manually. But, in your environment variable, `DATABASE_URL` and `DATABASE_AUTH_TOKEN` need to be defined.

Then, you can generate a production build with:

```shell
$ npm run build
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```shell
$ npm run start
```

The command starts a local server with the production build. Then, you can now open http://localhost:3000 with your favorite browser to see the project.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify in one click:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

During the setup, you need to define the `DATABASE_URL` and `DATABASE_AUTH_TOKEN` environment variables.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.

## Sponsors

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/a3cd2a25-377b-4c0d-a3d3-bce121df2c94">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
          <img alt="Clerk – Authentication & User Management for Next.js" src="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
        </picture>
      </a>
    </td>
    <td width="33%">
      <a href="https://turso.tech/?utm_source=nextjsstarterbp">
        <img src="public/assets/images/turso.png?raw=true" alt="SQLite Developer Experience">
      </a>
    </td>
    <td width="33%">
      <a href="https://upstash.com/?utm_source=nextjs-boilerplate">
        <img src="https://raw.githubusercontent.com/upstash/sponsorship/master/redis.png" alt="Upstash">
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td style=width="33%">
      <a href="https://nextlessjs.com">
        <img src="public/assets/images/nextlessjs.png?raw=true" alt="React SaaS Boilerplate Next.js" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="mailto:contact@creativedesignsguru.com">
        Add your logo here
      </a>
    </td>
  </tr>
</table>

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)
