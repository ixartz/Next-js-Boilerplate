# [3.28.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.27.0...v3.28.0) (2023-11-22)


### Features

* rename custom SignOutButton to LogOutButton to avoid confusion with Clerk SignOutButton ([183301b](https://github.com/ixartz/Next-js-Boilerplate/commit/183301b5e87bfa4479727c295e83b45b923454a0))
* use custom SignOutButton to apply custom CSS styles, unified with other nav links ([35094bf](https://github.com/ixartz/Next-js-Boilerplate/commit/35094bf038f0eae6e7e2d77238840c97cc7adabe))

# [3.27.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.26.0...v3.27.0) (2023-11-20)


### Features

* add PRODUCTION_URL environment variable and throw error when targetURL doesn't exist ([8134dee](https://github.com/ixartz/Next-js-Boilerplate/commit/8134dee84205e297020851bad4c81cf3906e7dfe))
* unified e2e tests for Checkly and playwright ([afa53f5](https://github.com/ixartz/Next-js-Boilerplate/commit/afa53f56b51f9a537131ceb046f90ea59c17dd71))
* use target URl instead of baseURL for checkly ([4fd61ed](https://github.com/ixartz/Next-js-Boilerplate/commit/4fd61edc77e1ef0d457cb829a89545f7dab47210))

# [3.26.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.25.0...v3.26.0) (2023-11-15)


### Features

* add a new GitHub Actions file for Checkly ([2109b1c](https://github.com/ixartz/Next-js-Boilerplate/commit/2109b1c75359a9ce89c2c0773fd65e78e1439403))
* add aria-label to fix jsx-a11y/control-has-associated-label error ([47e4ff4](https://github.com/ixartz/Next-js-Boilerplate/commit/47e4ff4f811b4e2071b9ba31f5c0ad1367b0caba))
* add email alert channel for checkly ([d1a4380](https://github.com/ixartz/Next-js-Boilerplate/commit/d1a43801d64fa261bdb252cf83dc289742f37294))
* add email channel in Checkly configuration to send emails when failing ([2019591](https://github.com/ixartz/Next-js-Boilerplate/commit/20195919d8a07f4e3cc0b7884e7d972de2935a94))
* create checkly config with a random working test ([32255b0](https://github.com/ixartz/Next-js-Boilerplate/commit/32255b0770ec5be84e9fd3321154329c556aedee))
* remove eslint rule customization in VSCode and use min(1) instead of nonempty (deprecated) ([9982a2d](https://github.com/ixartz/Next-js-Boilerplate/commit/9982a2d94fe7854eefaa754e9f41cf4735a81c86))
* update package-lock.json to fix CI ([1fff7ef](https://github.com/ixartz/Next-js-Boilerplate/commit/1fff7efe7295a9ee750b9f05af1a670db7bda733))

# [3.25.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.24.0...v3.25.0) (2023-10-30)


### Features

* release a new version for Next.js 14 and update README file ([4be2485](https://github.com/ixartz/Next-js-Boilerplate/commit/4be24850b75b9ca896e9e5546b8357745b128398))

# [3.24.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.23.0...v3.24.0) (2023-10-24)


### Features

* make guestbook endpoint avaiable to signed out users ([10b4d81](https://github.com/ixartz/Next-js-Boilerplate/commit/10b4d814d477e3475569537b1ef01a86b68c9a43))

# [3.23.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.22.0...v3.23.0) (2023-10-12)


### Features

* add playwright extension in VSCode ([956d1a8](https://github.com/ixartz/Next-js-Boilerplate/commit/956d1a8ec70c6a1214c72a115f0378507aa1b436))
* add playwright plugin in ESLint ([b2486f1](https://github.com/ixartz/Next-js-Boilerplate/commit/b2486f1b1090c458115b873ddc5bffa8ecaf8412))
* add Playwright: config, first test and dependency ([f054ea2](https://github.com/ixartz/Next-js-Boilerplate/commit/f054ea264bab3376ab7f86b0a0fdc1b6a4e98350))
* remove all Cypress related files and configurations ([9fe8271](https://github.com/ixartz/Next-js-Boilerplate/commit/9fe8271e667b819910702803f5489e99766fe9ff))


### Reverts

* the failing test in Navigation spec ([28996f5](https://github.com/ixartz/Next-js-Boilerplate/commit/28996f59d2f02562761609348000d55776365f7e))

# [3.22.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.21.0...v3.22.0) (2023-10-02)


### Features

* remove basePath in Next.js configuration ([7f9a0e6](https://github.com/ixartz/Next-js-Boilerplate/commit/7f9a0e6ed42aec7d9ec500531b7f519dc11a5ec9))
* remove no-img-element and use Next.js built-in <Image component ([383e3a3](https://github.com/ixartz/Next-js-Boilerplate/commit/383e3a38b98d92d59184275864888e9693a1cff7))

# [3.21.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.20.0...v3.21.0) (2023-09-25)


### Features

* update next.js to version 13.5 ([aa43f14](https://github.com/ixartz/Next-js-Boilerplate/commit/aa43f14bea16fcb4fd786d9fe74ae37bf29b5b5f))
* update storybook to the latest version and install playwright ([2079a34](https://github.com/ixartz/Next-js-Boilerplate/commit/2079a347bbbd08d2ffbc4ea96995eaaf66602373))

# [3.20.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.19.0...v3.20.0) (2023-09-01)


### Features

* make updatedAt working when the user update a message and rename the attribute to updatedAt ([4032bc0](https://github.com/ixartz/Next-js-Boilerplate/commit/4032bc0123660c20a72aa52ed611ea1f150e54af))

# [3.19.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.18.0...v3.19.0) (2023-08-30)


### Features

* make it easier to try edge runtime in the app router ([3f5fd58](https://github.com/ixartz/Next-js-Boilerplate/commit/3f5fd58d0980fdd35860d31d29b8f18e9c93b53f))

# [3.18.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.17.0...v3.18.0) (2023-08-27)


### Features

* remove MIGRATE_DB which not needed anymore with process.env.NODE_ENV ([3fe81ae](https://github.com/ixartz/Next-js-Boilerplate/commit/3fe81ae98440b33ce18cee80265fdaa54e242184))

# [3.17.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.16.0...v3.17.0) (2023-08-27)


### Features

* add schema in drizzle instance and disable migrate in production ([5e26798](https://github.com/ixartz/Next-js-Boilerplate/commit/5e2679877a3da64a4cabfc22fdaacebd6abe6789))
* add script to migrate before building next.js ([220d05e](https://github.com/ixartz/Next-js-Boilerplate/commit/220d05e5d028852ccc533ca60b187bc3d47c5d73))
* do not run db migration when building on GitHub actions ([964cfa1](https://github.com/ixartz/Next-js-Boilerplate/commit/964cfa1a02fb41b387c851f0b2293c673859d60a))
* reload guestbook page when deployed on production ([c2e91b2](https://github.com/ixartz/Next-js-Boilerplate/commit/c2e91b2df944b0659d1768d2a7cc54a494d7d5c1))
* replace dotenv/config by dotenv-cli in db:studio NPM scripts ([f7f8743](https://github.com/ixartz/Next-js-Boilerplate/commit/f7f87435a984fa9d0407a7602d1ef38563c5e8d0))

# [3.16.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.15.0...v3.16.0) (2023-08-24)


### Bug Fixes

* build issues with prerendering ([ff117b9](https://github.com/ixartz/Next-js-Boilerplate/commit/ff117b9750e3609cebbf53a5dea01f0fbf94f865))


### Features

* add .env file for production ([58ed68c](https://github.com/ixartz/Next-js-Boilerplate/commit/58ed68cc2eefb1274e6e268c40a3ed8cd7d936be))
* add authToken support for production Turso ([26b8276](https://github.com/ixartz/Next-js-Boilerplate/commit/26b827618199f1dd73453c7ec021c13a4aaf5f7b))
* add await for migrate function ([96793f0](https://github.com/ixartz/Next-js-Boilerplate/commit/96793f0adedb10f802dfb46ff96b85f14c78ebf3))
* add database powered by Turso in guestbook page ([64073a5](https://github.com/ixartz/Next-js-Boilerplate/commit/64073a5babb38327a23fd3ae2b354152306e7977))
* add db file in gitignore ([cd45e09](https://github.com/ixartz/Next-js-Boilerplate/commit/cd45e0906cc79e87302ee6b88674089c5de059a3))
* add drizzle config and database schema ([df30388](https://github.com/ixartz/Next-js-Boilerplate/commit/df30388002ead9121ffb764e1bd11a71550cbe06))
* add style for guestbook ([339154c](https://github.com/ixartz/Next-js-Boilerplate/commit/339154ccfdaf7e53aeefd12fe0e347c645be5163))
* add typesafe environment variables ([5a2cd78](https://github.com/ixartz/Next-js-Boilerplate/commit/5a2cd78aca2fc60e6c0d4861ff656e7ba2ac86c4))
* create guestbook should not accept empty username and email ([37e4408](https://github.com/ixartz/Next-js-Boilerplate/commit/37e4408f968b36332a0a8ae9a90c687eee7fb4a0))
* implement AddGuestbookForm to create new guestbook message ([d7b37e6](https://github.com/ixartz/Next-js-Boilerplate/commit/d7b37e63f65d528e599b14d64cbf3ac5b2d3feba))
* implement delete guestbook entry ([b7f823a](https://github.com/ixartz/Next-js-Boilerplate/commit/b7f823a83435856ac32aea90da8317926e5b2b8b))
* improve UI for AddGuestbookForm ([153abfc](https://github.com/ixartz/Next-js-Boilerplate/commit/153abfc0e2f10a5aa59e24af8f0ef76667041578))
* insert in guestbook and retrieve all guestbooks ([23ee408](https://github.com/ixartz/Next-js-Boilerplate/commit/23ee4086a8c2166bdd6fe82b1cb50cc286793bb3))
* make guestbook editable ([8ec1406](https://github.com/ixartz/Next-js-Boilerplate/commit/8ec14066a966c76b02bf5552ec2f4f348048a45c))
* remove notnull in schema.ts ([10f4943](https://github.com/ixartz/Next-js-Boilerplate/commit/10f49434999ba0a884a72e640c67dc955bf7eedd))
* rename from email to username ([52ab0e4](https://github.com/ixartz/Next-js-Boilerplate/commit/52ab0e4f86b20ace52cbb6ce421f85357c0dfa6e))
* replace new-router page by guestbook ([efc84e6](https://github.com/ixartz/Next-js-Boilerplate/commit/efc84e607d23981dba07b931ff078776aa9693b5))
* replace with a working URL for the database to avoid timeout ([fecd8a5](https://github.com/ixartz/Next-js-Boilerplate/commit/fecd8a5d66934af774fde12759f8079cabfb382b))
* update dotenv path to .env, the file was renamed ([bd9b2c9](https://github.com/ixartz/Next-js-Boilerplate/commit/bd9b2c9efd12a0b54125ac352c43aab9d31c7c99))
* use local SQLite file ([fe52801](https://github.com/ixartz/Next-js-Boilerplate/commit/fe528010cf2d867fcbbc53156ae7fa6c862a88f4))
* validate t3 env on build ([6d448ed](https://github.com/ixartz/Next-js-Boilerplate/commit/6d448ed0fdea51952c8bfeaf4ce948cf9365675c))

# [3.15.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.14.1...v3.15.0) (2023-08-10)


### Features

* add next.js middleware with Clerk ([2f4a1d3](https://github.com/ixartz/Next-js-Boilerplate/commit/2f4a1d3e394eb835b011a13289f156a91993d782))
* add sign in and sign up link in index page ([4489085](https://github.com/ixartz/Next-js-Boilerplate/commit/4489085e8deb0ae1836a3741657f8331af6294ca))
* add sign in and sign up page ([f021f71](https://github.com/ixartz/Next-js-Boilerplate/commit/f021f71f755e3af3cb789d0330ad2a0237ec600d))
* add sign out button in dashboard ([c663d1c](https://github.com/ixartz/Next-js-Boilerplate/commit/c663d1c4799869faf2a2c549669521409f192830))
* add user profile to manage account ([470731b](https://github.com/ixartz/Next-js-Boilerplate/commit/470731ba960dfdd0aa57f66affde28b0226d5d42))
* add user profile to manage account ([581efbe](https://github.com/ixartz/Next-js-Boilerplate/commit/581efbef51cf700f9bbe94f268ff99639f5e49da))
* implement hello component by display user email address ([7047985](https://github.com/ixartz/Next-js-Boilerplate/commit/7047985ffbce9a986e7308040928783395cf7b68))
* implement sign out button ([8588834](https://github.com/ixartz/Next-js-Boilerplate/commit/8588834b5f1a53c51835d7aba5a4c9f1230c1bf7))
* implement sign out button and redirect to sign in page when logging out ([45ed137](https://github.com/ixartz/Next-js-Boilerplate/commit/45ed137d5c4e292ac8329f0661cb38fc29812927))
* redirect to dashboard when the user is signed in for sign up and sign in page ([629a033](https://github.com/ixartz/Next-js-Boilerplate/commit/629a03363af310e5411fea4cb554b53e72701e7d))

## [3.14.1](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.14.0...v3.14.1) (2023-08-07)


### Bug Fixes

* resolve sourcemap error with Cypress and TypeScript 5 ([54a5100](https://github.com/ixartz/Next-js-Boilerplate/commit/54a51004d6e22860eb1c6aad4ff689fac46bd0b4))

# [3.14.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.13.0...v3.14.0) (2023-08-03)


### Features

* use Next.js custom TypeScript plugin ([915e193](https://github.com/ixartz/Next-js-Boilerplate/commit/915e193f8037d36e9779fe7464a4d6c1685b3a94))

# [3.13.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.12.0...v3.13.0) (2023-08-02)


### Features

* add app routed pages ([9cc79a0](https://github.com/ixartz/Next-js-Boilerplate/commit/9cc79a00647b0a4ce64f66da4a430ec2c4972367)), closes [#64](https://github.com/ixartz/Next-js-Boilerplate/issues/64)
* add sitemap support app router ([b82e566](https://github.com/ixartz/Next-js-Boilerplate/commit/b82e566fb43d63329ef4507870494e554dea0e6a))
* app router doesn't support next export, use output: export ([76aa9cd](https://github.com/ixartz/Next-js-Boilerplate/commit/76aa9cd0597ad06fd0f0160ad6119a25b87d3336))
* generate statically portfolio pages ([1f1bf31](https://github.com/ixartz/Next-js-Boilerplate/commit/1f1bf3143215ab19d19cd4f13e4048b0ee84073c))
* update test for new router page ([b695666](https://github.com/ixartz/Next-js-Boilerplate/commit/b695666fd41c9ddf1886e9b5e3c7cc43b616820c))

# [3.12.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.11.0...v3.12.0) (2023-07-13)


### Features

* format code to respect prettier ([48b6a49](https://github.com/ixartz/Next-js-Boilerplate/commit/48b6a49fd204083deb94b01aab70b52a42b9593f))
* resolve conflict between airbnb-hook and next/core-web-vitals about react hooks ([5e0be4f](https://github.com/ixartz/Next-js-Boilerplate/commit/5e0be4fd8c2f9acd895f0b9ce373af7d782d44df))
* update to the latest dependencies version ([d93fd83](https://github.com/ixartz/Next-js-Boilerplate/commit/d93fd83b6ab93360ddd8489afc8cfb05603e504c))


### Reverts

* use older TypeScript to avoid e2e compilation with sourcemap ([6377d2f](https://github.com/ixartz/Next-js-Boilerplate/commit/6377d2f2efc71384fba236427086b4e75f189328))

# [3.11.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.10.1...v3.11.0) (2023-06-07)


### Features

* update dependencies to the latest version ([b7609de](https://github.com/ixartz/Next-js-Boilerplate/commit/b7609dea1c8bd49f6ac05439740ea78894cd4a79))

## [3.10.1](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.10.0...v3.10.1) (2023-05-29)


### Bug Fixes

* added types ([b35ddc9](https://github.com/ixartz/Next-js-Boilerplate/commit/b35ddc91ecad81986432dce1ba84c302e6394a5b))

# [3.10.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.9.0...v3.10.0) (2023-04-26)


### Features

* add vscode yoavbls.pretty-ts-errors extension ([3588ce1](https://github.com/ixartz/Next-js-Boilerplate/commit/3588ce1dd366ebaa69f97551be58528d1ae38457))
* remove stories in the coverage from Jest ([d502869](https://github.com/ixartz/Next-js-Boilerplate/commit/d502869a08a0b1d9025a4ce582651c5353f29d59))
* use default airbnb instead of the base version ([5c05116](https://github.com/ixartz/Next-js-Boilerplate/commit/5c05116fb777aee09c1af7df6694e54403eaaccb))

# [3.9.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.8.2...v3.9.0) (2023-04-05)


### Features

* add storybook into project ([51f3748](https://github.com/ixartz/Next-js-Boilerplate/commit/51f3748c0cb6d9cd04cdb0d3b9d95a0f60851866))
* add tailwind css support in Storybook ([5e0d287](https://github.com/ixartz/Next-js-Boilerplate/commit/5e0d287cef8a898df8f1a98632a8703657282100))
* remove warning for no extreneous deps in stories ([b243d44](https://github.com/ixartz/Next-js-Boilerplate/commit/b243d441e4b75566e16f5fa64d26900267eb89f5))


### Reverts

* remove storybook addon-styling which is not needed ([e863fed](https://github.com/ixartz/Next-js-Boilerplate/commit/e863fedcbc5a1aaf808c295d80f8de95b6abd1f7))

## [3.8.2](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.8.1...v3.8.2) (2023-03-28)


### Bug Fixes

* error generated by eslint-plugin-cypress ([7562c6b](https://github.com/ixartz/Next-js-Boilerplate/commit/7562c6bddb31e6941aee7e4e2bbcdabf5be3bddf))

## [3.8.1](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.8.0...v3.8.1) (2023-03-16)


### Bug Fixes

* typo in Readme ([8f7c1b7](https://github.com/ixartz/Next-js-Boilerplate/commit/8f7c1b79a46406b04b90ed8a5fe5029b3c24ff8c))

# [3.8.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.7.0...v3.8.0) (2023-03-02)


### Features

* fix heading levels increase by one ([e712e60](https://github.com/ixartz/Next-js-Boilerplate/commit/e712e60402f04033673d93e464d7b3c46fff7dbe))

# [3.7.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.6.0...v3.7.0) (2023-02-05)


### Features

* improve accessibility ([aa0f0b1](https://github.com/ixartz/Next-js-Boilerplate/commit/aa0f0b12085e31f13574fc9f4349157102d4467b))


### Reverts

* add support for all Node.js 14+, too restrictive with only Node.js 18+ ([4e27540](https://github.com/ixartz/Next-js-Boilerplate/commit/4e27540f638d4767fb60b612519669ad6bf69367))
* downgrade semantic-release version to 19 ([26d5a6e](https://github.com/ixartz/Next-js-Boilerplate/commit/26d5a6ebe2fc4fe59fef40779e132ccf1f31c09f))

# [3.6.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.5.4...v3.6.0) (2022-12-03)


### Bug Fixes

* add npx before percy command line ([4824e98](https://github.com/ixartz/Next-js-Boilerplate/commit/4824e98a4d621684494fe2c7e8c3351551e52845))
* retrive PERCY_TOKEN and set token for percy cli ([afe00f2](https://github.com/ixartz/Next-js-Boilerplate/commit/afe00f2e47b5dbc5fb701dd2e46756f4b7e498fd))
* wait until the link rendered instead a wrong heading tag ([e38655b](https://github.com/ixartz/Next-js-Boilerplate/commit/e38655b853b39fdcb9bccd3a84e99dd5caa1681d))


### Features

* add visual testing with Percy ([b0a39f5](https://github.com/ixartz/Next-js-Boilerplate/commit/b0a39f58e1bd0934158b0bab8ab7e4c9215e88f0))

## [3.5.4](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.5.3...v3.5.4) (2022-12-03)


### Bug Fixes

* change matching regex for Cypress files ([861d545](https://github.com/ixartz/Next-js-Boilerplate/commit/861d54596b61b7706cfbb681df334d73b34a378e))

## [3.5.3](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.5.2...v3.5.3) (2022-12-02)


### Bug Fixes

* resolve merge conflict ([276f57a](https://github.com/ixartz/Next-js-Boilerplate/commit/276f57aeb0d4a346f8e19ad81ce4703458d9f41c))

## [3.5.2](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.5.1...v3.5.2) (2022-12-02)


### Bug Fixes

* use npx npm-check-updates ([e530193](https://github.com/ixartz/Next-js-Boilerplate/commit/e5301939a5ff98c598899ff49bee1ad351759292))

## [3.5.1](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.5.0...v3.5.1) (2022-12-02)


### Bug Fixes

* add steps in update-deps.yml file, syntax error ([b5de445](https://github.com/ixartz/Next-js-Boilerplate/commit/b5de445f1f927a5a7c2b0c85746b8fd07629cb55))

# [3.5.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.4.0...v3.5.0) (2022-12-02)


### Features

* add auto-update GitHub Actions ([364168f](https://github.com/ixartz/Next-js-Boilerplate/commit/364168f3407c7cdd21da7cd1de6d9d930f89d99a))

# [3.4.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.3.0...v3.4.0) (2022-12-02)


### Features

* automatically format the whole codebase with npm run format ([9299209](https://github.com/ixartz/Next-js-Boilerplate/commit/92992096ede4d2b3e77c3e0c96b75e5e6b84067d))
* update footer message and comment ([4f74176](https://github.com/ixartz/Next-js-Boilerplate/commit/4f74176b05528666fd8b92a8becdc7e3c2f0db4a))

# [3.3.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.2.4...v3.3.0) (2022-11-22)


### Features

* change 'powered by' text to 'built' with ([fe0a29f](https://github.com/ixartz/Next-js-Boilerplate/commit/fe0a29f8fbab14c7e8c8e98a75ce488ac157e509))

## [3.2.4](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.2.3...v3.2.4) (2022-11-20)


### Bug Fixes

* update README file for next-sitemap ([9496217](https://github.com/ixartz/Next-js-Boilerplate/commit/94962171a35a07e84319374500f28a76f264a266))

## [3.2.3](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.2.2...v3.2.3) (2022-11-20)


### Bug Fixes

* add sitemap file in gitignore, it shouldn't commit to git ([344b731](https://github.com/ixartz/Next-js-Boilerplate/commit/344b7312df2f7e12e642a6346ef05ad9a7ca766c))

## [3.2.2](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.2.1...v3.2.2) (2022-11-20)


### Bug Fixes

* rename from mjs to js next-sitemap file ([7d450ff](https://github.com/ixartz/Next-js-Boilerplate/commit/7d450ffce77f0be4c533cb1aab757f7fb1f13596))

## [3.2.1](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.2.0...v3.2.1) (2022-11-20)


### Bug Fixes

* code styling in blog component pages ([f4a55c4](https://github.com/ixartz/Next-js-Boilerplate/commit/f4a55c4234fc03ed719859c12f13bffabd120c6d))
* move getStaticPaths at the top of blog page ([83892ea](https://github.com/ixartz/Next-js-Boilerplate/commit/83892ea865459f59da824c9358fbf4ccea6475e6))
* remove generated files by next-sitemap ([c5d93bf](https://github.com/ixartz/Next-js-Boilerplate/commit/c5d93bf9fe67a6737b536edf4d50d56cd4c8af2c))

# [3.2.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.1.0...v3.2.0) (2022-11-19)


### Features

* run github release only on completed CI workflow ([dd4de76](https://github.com/ixartz/Next-js-Boilerplate/commit/dd4de76b6ea013190a6ea18d69eb3764e1b915f9))

# [3.1.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v3.0.0...v3.1.0) (2022-11-19)


### Bug Fixes

* just rebuild sitemap ([831bae9](https://github.com/ixartz/Next-js-Boilerplate/commit/831bae93831eb5c4f259c4a0fa9ec3012ede8927))


### Features

* add blog page ([89c4ec7](https://github.com/ixartz/Next-js-Boilerplate/commit/89c4ec79db48f4ae09af3e8ddb3ce5a980ed8ee6))
* add sitemap.xml and robots.txt from build ([545d133](https://github.com/ixartz/Next-js-Boilerplate/commit/545d133decee4f7d42c228049ef3bde2b9a94b0a))
* disable Husky for release ([f20c595](https://github.com/ixartz/Next-js-Boilerplate/commit/f20c5951e018c99421e833eef6ce14bd9632838f))
* rename from master to main ([10920ec](https://github.com/ixartz/Next-js-Boilerplate/commit/10920ece4892ca73639388116af59fdd3e077d5f))
* update TypeScript to 4.9.x ([471dc70](https://github.com/ixartz/Next-js-Boilerplate/commit/471dc70306c69ecb524af40aa76403daa83597e2))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v2.1.1...v3.0.0) (2022-10-26)


### ⚠ BREAKING CHANGES

* update to Next.js 13 and Tailwind CSS 3.2

### Features

* add commit script in package.json ([8f4719e](https://github.com/ixartz/Next-js-Boilerplate/commit/8f4719ec550ab0dbffa93ca1d278aa9e370a773a))


### Bug Fixes

* Eslint comment update ([8baa5d1](https://github.com/ixartz/Next-js-Boilerplate/commit/8baa5d160734a3cadb419534509cc6edaac57456))


* update to Next.js 13 and Tailwind CSS 3.2 ([fc9f2c1](https://github.com/ixartz/Next-js-Boilerplate/commit/fc9f2c1cf914c15b36cdf881306d20b405a259e8))

### [2.1.1](https://github.com/ixartz/Next-js-Boilerplate/compare/v2.1.0...v2.1.1) (2022-09-08)

## [2.1.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v2.0.0...v2.1.0) (2022-07-08)


### Features

* add cypress and cypress eslint plugin ([5657ee6](https://github.com/ixartz/Next-js-Boilerplate/commit/5657ee6dab03b11020bb2ce80083669785edd6ce))

## [2.0.0](https://github.com/ixartz/Next-js-Boilerplate/compare/v1.1.0...v2.0.0) (2022-07-03)


### ⚠ BREAKING CHANGES

* add Jest and React testing library
* to React 18

### Features

* add coverage for vscode-jest and configure jest autoRun ([ad8a030](https://github.com/ixartz/Next-js-Boilerplate/commit/ad8a03019010577bfb8e8ed850e8d45ca274dbe9))
* add Jest and React testing library ([e182b87](https://github.com/ixartz/Next-js-Boilerplate/commit/e182b87db5943abbe706568e77285e1eb6bddf5e))
* add TypeScript support for Tailwind CSS configuration ([41f1918](https://github.com/ixartz/Next-js-Boilerplate/commit/41f19189655abe3941485363e057812a5fcd6c02))
* add vscode jest extension ([49ab935](https://github.com/ixartz/Next-js-Boilerplate/commit/49ab935a03f5a9d1074a155331107737fd7dad13))


* to React 18 ([c78f215](https://github.com/ixartz/Next-js-Boilerplate/commit/c78f2152a978a39b2c6d381427df8e8ad2a30099))

## 1.1.0 (2022-04-25)


### Features

* add commitlint with config-conventional ([97a9ac7](https://github.com/ixartz/Next-js-Boilerplate/commit/97a9ac7dbbca3f8d4fad22a9e4a481c029cd2cb5))


### Bug Fixes

* add missing files for commitzen ([018ba8b](https://github.com/ixartz/Next-js-Boilerplate/commit/018ba8bde81b0f6cc60230fe4668b149ac3b2e6a))
* update package-lock.json ([fba016d](https://github.com/ixartz/Next-js-Boilerplate/commit/fba016dec202d5748e30804b1bf50e30c00ef120))
