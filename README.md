# CN Blog

## Install & Run

```shell
$ npm i
$ npm run dev
```

## Project Breakdown

This is a pretty quickly pulled together React SPA app with some attempts at project organization:

- Used Vite w/ TypeScript to get moving quickly
- Decided to go with a purely client side SPA application, specifically since the provided endpoint was publically available
- Likely would have gone with Remix or Next.js if the API call was required from the server (CORS or API key required)
- Added Zod package to parse and validate JSON returned from fetch calls and help with static type support
- Added React Query package to help with async state management
- Added Radix UI for some UI Components but mainly did styling via CSS Modules; wouldn't necessarily be keen on a mix-and-match setup like this on a large green-field project
- Used local storage to persist favorites list but would absolutely not recommend this type of solution for a production application as this type of persistance should be completed with a database of some kind server side
- Couple custom hooks created to consolidate side effect logic
