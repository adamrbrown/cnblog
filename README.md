# CN Blog

## Install & Run

```shell
$ npm i
$ npm run dev
```

## Project Breakdown

This is a pretty quickly pulled together React SPA app with some attempts at organization

- Couple custom hooks created to consolidate side effect logic
- Decided to go with a straight SPA application, specifically since the provided endpoint was publically available
- Likely would have gone with Remix or Next.js if I needed to call the API from the server
- Used Vite w/ TypeScript to get moving quickly
- Added Zod package to parse and validate JSON returned from fetch calls and helping with static type support
- Added React Query package to help with async state management
- Added Radix UI for some UI Components but mainly did styling with CSS Modules; wouldn't be keen on a mix-and-match setup like this on a large project
- Used local storage to persist favorites list but would absolutely not recommend this type of solution for a production application as this type of persistance should be completed with a database of some kind server side
