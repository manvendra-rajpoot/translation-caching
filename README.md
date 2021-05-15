# Translation Caching

### Goal
- A web server that exposes an API to translate a text.

### Task
- Create a web server with a RESTful API to translate a text from one language to another.
- For the actual translation, an external service like Google Translate can be used.
- The source and target language should be definable via the API.
- In addition, cache (store in Database) translations, in order to avoid repeated hits to the translation API. The
cache must be persistent!
- The server should have an extensible architecture. 
E.g. We may want to change our caching strategy or switch out our
translation service.

### Tech stack used
-  `NodeJS` & `ExpressJS` (a flexible Node.js web application framework) as beckend.
-  `node-cache` package for caching.
-  `Jest` to test the APIs.

## Usage 

Rename ```config/config.env.env``` to ```config/config.env``` and update the values/settings to your own project.

## Install Dependencies

```
npm install
```

## Run the app
```
# Run in development mode
npm run devStart

# Run in production mode
npm start
```

- Version: 1.0.0
- Lisence: MIT