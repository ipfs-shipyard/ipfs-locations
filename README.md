# ipfs-locations

[![npm](https://img.shields.io/npm/v/ipfs-locations.svg?style=flat-square)](https://www.npmjs.com/package/ipfs-locations)
[![Travis](https://img.shields.io/travis/ipfs-shipyard/ipfs-locations.svg?style=flat-square)](https://travis-ci.org/ipfs-shipyard/ipfs-locations)

This lets you poll locations from IPFS very easily. This is used by [`ipfs-stats`](https://github.com/ipfs-shipyard/ipfs-stats) to manage hundreds of location lookups. It looks up locations sequentially to improve the performance and avoid too many requests at once.

## Install

### In Node.js through npm

```bash
$ npm install --save ipfs-locations
```

### Browser: Browserify, Webpack, other bundlers

The code published to npm that gets loaded on require is in fact an ES5 transpiled version with the right shims added. This means that you can require it and use with your favorite bundler without having to adjust asset management process.

```js
const LocationsPoller = require('ipfs-locations')
```

### In the Browser through `<script>` tag

Loading this module through a script tag will make the ```IpfsLocations``` obj available in the global namespace.

```
<script src="https://unpkg.com/ipfs-locations/dist/index.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/ipfs-locations/dist/index.js"></script>
```

## API

### Class `LocationsPoller`

#### `new LocationsPoller(ipfs)`

- `ipfs` Object. [IPFS API Object](https://github.com/ipfs/js-ipfs-api).

#### Methods

- `locations.get(addr)` obtains the location for a certain address. It will return a Promise.
- `locations.getImmediate(addr)` does the same as the previous but returns immediatelly. If there is no value in cache, returns a location with 'Unknown'.
