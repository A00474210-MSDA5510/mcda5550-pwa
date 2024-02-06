# PWA + React (CRA)

This project is a Progressive Web App (PWA) built with React using the Create React App (CRA) toolkit. For comprehensive documentation, refer to [Create React App PWA Documentation](https://create-react-app.dev/docs/making-a-progressive-web-app/).

## Create React App

To create a PWA with React using [`create-react-app`](https://create-react-app.dev/docs/getting-started), execute the following command:

```
npx create-react-app my-app --template cra-template-pwa
```

This command generates a PWA-ready React application.

## Starting the App

To launch the app, execute:

```
npm run start
```

## Testing PWA Functionalities

- CRA utilizes `Workbox` for service worker management, offering caching and offline strategies.
- By default, service workers are not installed in the development environment (when using `npm run start`).
- To test service worker functionalities:
  - Build the app using `npm run build`.
  - Serve the built app, for example, using the `serve` package (`npm install -g serve` then `serve -s build`).
- **Activating the Service Worker:**
  - The default service worker in CRA is not active initially.
  - To activate it, modify `src/index.js`: replace `serviceWorker.unregister()` with `serviceWorker.register()`.
- For more details about `Workbox` and its capabilities, visit [Workbox on GitHub](https://github.com/GoogleChrome/workbox).
