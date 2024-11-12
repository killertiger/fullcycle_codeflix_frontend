# Full Cycle - Codeflix Frontend

This project is based on the FullCycle 3.0 - CodeFlix - React (Front-end)

Reference repository: https://github.com/devfullcycle/FC3-codeflix-frontend

## Project Info

### External packages
- [prettier](https://prettier.io/)
- [prettier prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [jest](https://nextjs.org/docs/app/building-your-application/testing/jest)
- [tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide)
- [heroicons](https://github.com/tailwindlabs/heroicons)
- [Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference
- [json-server](https://github.com/typicode/json-server/tree/v0)


### Recommended VsCode Extensions:
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Tips for external tools

- [jsonplaceholder](https://jsonplaceholder.typicode.com/) - Free fake and reliable API for testing and prototyping.
- [jsoncrack](https://jsoncrack.com/) - Tool for visualizing JSON data in a structured, interactive graphs, making it easier to explore, format, and validate JSON.
- [quicktype](https://quicktype.io/) - Convert JSON into gorgeous, typesafe code in any language.
- [rapidapi](https://rapidapi.com) - World’s Largest Public API Marketplace

## Setup project

```bash
git clone https://github.com/killertiger/fullcycle_codeflix_frontend.git
```

Copy the following file: https://raw.githubusercontent.com/devfullcycle/FC3-codeflix-frontend/refs/heads/master/public/banner.png
and save it in the ./public/banner.png

install json-server
```bash
npm install -g json-server@0.17.4
```

# Running

starting json-server:
```bash
json-server --watch db.json -p 3333
```

development:
```bash
yarn dev
```

tests:
```bash
yarn test
```