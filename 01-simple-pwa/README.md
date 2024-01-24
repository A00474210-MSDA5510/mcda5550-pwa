# Creating a Simple Progressive Web App (PWA)

This project demonstrates how to transform a standard web application (HTML/CSS/JS) into a Progressive Web App (PWA).

> A PWA is an **enhanced** web application that provides additional features compared to a standard web app, such as offline support, background syncing, and push notifications. It primarily relies on a **service worker**, a JavaScript file that runs in the background, and a **web app manifest**, a JSON file that describes the app.

🌐 _You can check the hosted app [here](https://nervous-goldstine-881aae.netlify.app/)!_

### Directories

- `finish/`: This directory contains the completed PWA with all enhancements implemented.
- `start/`: This directory contains the basic app HTML/CSS/JS code, excluding the PWA enhancements.

## Getting Started

### Pre-requisites

Ensure you have Node.js installed on your system to use npm for installing dependencies and running the app.

### Installation

1. Clone the repository to your local machine.
1. Navigate to the project directory, then to the app directory (`start/` or `finish/`)
1. Run `npm install` to install the necessary Node.js development dependencies.

### Start the app

To start the app run:

```
npm run start
```

This command initiates a local web server using the [`http-server`](https://github.com/http-party/http-server#readme) package, a simple HTTP server. It serves the files (`index.html`, `script.js`, `styles.css`, etc.) over HTTP, making them accessible through a web browser.

> `http-server` is an ideal choice for testing and development due to its ease of use and fast setup.

## Converting to a PWA

## More Info

### App Manifest

App manifest (`manifest.json`) makes your web app installable, therefore a **Progressive** Web App. It contains metadata about the app, such as its name, start URL, display properties, and icons.

Example of a manifest file:

```
{
  "name": "A simple PWA for MCDA5550",            -> long name
  "short_name": "intro-pwa",                      -> short name
  "description": "Creating a PWA is very easy!",  -> (shown when you add to favorite)
  "start_url": "/",                               -> the main page that loads on stratup
  "scope": ".",                                   -> included pages (. means *all* the current directory)
  "display": "standalone",                        -> standalone meaning to look and feel like a native app  (opposed to `browser`)
  "background_color": "#FFFFFF",                  -> color on splash screen and while loading
  "theme_color": "#9900FE",                       -> theme color (ex. on the top bar)
  "orientation": "portrait",                      -> set and/or enforce the default orientation (portrait/landscape)
  "dir": "ltr",                                   -> read direction of the app
  "lang": "en-CA",                                -> main language of the app
  "icons": [                                      -> configure icons (browser will choose its better choice)
    {
      "src": "/icons/smu-icon.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    // ...
  ]
}
```

After adding the manifest file and linking it in your HTML, you can inspect it in Chrome Dev Tools under the Application tab. Remember to clear the browser cache if changes are not immediately visible.

![app manifest, in chrome dev tools](./screenshots/manifest-chrome-dev-tools.png)

You should see your app on your phone like this:

<div style="display: flex">
    <img src="./screenshots/app-screenshot-on-pixel-phone.png" alt="app screenshot on pixel phone" width="250px" />
    <img src="./screenshots/app-icon-on-home-screen.png" alt="app icon on home screen" width="250px" />
    <img src="./screenshots/app-screenshot-2-on-pixel-phone.png" alt="app screenshot #2 on pixel phone" width="250px" />
</div>

### Service Workers

- Service Workers only work over `https connections, but localhost is an exception for development.
- The `install` event triggers when a new service worker is installed.
- `activate` event fires when a service worker is activated (to activate a new service worker, you need to close existing tabs)

### Safari Support

For compatibility with Safari, include the following `<meta>` tags in your HTML:

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="#9900FE" />
<meta name="apple-mobile-web-app-title" content="PWAGram" />
<link type="apple-touch-icon" href="/icons/smu-icon-48x48.png" size="48x48" />
<link type="apple-touch-icon" href="/icons/smu-icon-72x72.png" size="72x72" />
<!-- Add all required icons -->
```
