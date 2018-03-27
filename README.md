# crawl-io

crawl-io is a small (but end-to-end) demo MERN application for searching products online.

Demo is deployed to http://www.crawlio.ml/

## Requirements
- Node (v9+)
- Yarn
- Docker (optional but recommended)

## Setup
1- Clone this repository
```bash
git clone https://github.com/agustinaliagac/crawlio-development.git
```

2- Install dependencies
```bash
cd crawlio-development
yarn install:full
```

3A- Run (without Docker)
```bash
yarn start

# Or start backend and frontend independently
yarn start:frontend
yarn start:backend
```

3B- Run (Docker)
```bash
yarn start:docker
```

## Tech stack and structure

This project is heavily JS-based and was created with tools/frameworks like:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Socket.io](https://socket.io/)
- [Docker / Docker Compose](https://www.docker.com/)
- [X-Ray scraper](https://github.com/matthewmueller/x-ray)

crawl-io's back end consists in a small REST API, asynchronous web crawler and websocket handlers. The front end consists in a React/Redux app, following the [Ducks pattern](https://github.com/erikras/ducks-modular-redux).
The front end was created with a lot of [ES6 features](https://github.com/lukehoban/es6features) in mind, while the back end has a lot of the old ES5 syntax.

## Development
Since this project was designed to be a "demo" only, it showcases how to create a MERN app from an end-to-end perspective. This means that I'm including:
- Unit testing (Jest / Mocha / Chai)
- ESLint checking (Extending [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
- Pre-push linting and testing
- [CI/CD Pipeline with CircleCI](https://circleci.com/gh/agustinaliagac/crawlio-development) and a VPS provider
- [Docker Hub publishing](https://hub.docker.com/r/agustinaliagac/crawlio/)
