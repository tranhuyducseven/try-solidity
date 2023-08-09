# NextJs Frontend Template (DVLAB)
> An opinionated NextJS template for DVLAB

Copyright (c) 2023 DVLAB, Ltd; All rights reserved.

Please use this source code & distribute it internally in DVLAB, Ltd or in the development course's scopes. DO NOT distribute it outside of DVLAB.

Copyright infringement is a violation of federal law subject to criminal and civil penalties.

### Commands

- Run: `yarn install` for install all packages
- Run: `yarn dev` for start dev environment
- Run: `yarn build` for build your project
- Run: `yarn start` for start your built project
- Run: `yarn lint` for checking error and fix it

### Project structure

```
├── apis                # All apis come here
├── components          # All components that can share between screen
│   └── _template       # Template for component
├── locales             # I18N Language files
│   ├── en
│   └── vi
├── configs             # All configs and constant goes here
├── hooks               # Custom hooks for project
├── layouts             # Layouts of screen and components
├── pages               # Page file of NextJS (Use as router to screen folder)
├── public              # Public folder, contain static files
├── screens             # Screen component goes here
├── services            # All services goes here
├── states              # State managerment for app
│   └── app.ts           # Zustand state
├── styles              # App global styles (SCSS)
├── types               # App global type (Typescript)
└── utils               # App's utils
```

### Tech included

- `NextJS + Typescript` Base source
- [Zustand](https://github.com/pmndrs/zustand) State management
- `Husky` Git helper
- `SCSS modules` Style system
- `Eslint and Prettier` Rule of code

### Dependencies notes:
```json
 "jsonwebtoken": "^8.5.1",
 "@types/jsonwebtoken": "^9.0.1",

```
