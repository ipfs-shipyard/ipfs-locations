# ipfs-locations

[![npm](https://img.shields.io/npm/v/ipfs-locatins.svg?style=flat-square)](https://www.npmjs.com/package/ipfs-locatins)
[![Travis](https://img.shields.io/travis/hacdias/ipfs-locatins.svg?style=flat-square)](https://travis-ci.org/hacdias/ipfs-locatins)

This lets you poll locations from IPFS very easily. This is used by [`ipfs-stats`](https://github.com/hacdias/ipfs-stats) to manage hundreds of location lookups. It looks up locations sequentially to improve the performance and avoid too many requests at once.

## Install

```
npm install --save ipfs-locations
```

## Documentation

### Class `LocationsPoller`

#### `new LocationsPoller(ipfs, [concurrent])`

- `ipfs` Object. [IPFS API Object](https://github.com/ipfs/js-ipfs-api).
- `concurrent` Integer (optional). How many locations to fetch simultaneously. Defaults to `10`.

#### Methods

- `locations.get(addr)` obtains the location for a certain address. It will return a Promise.
- `locations.getImmediate(addr)` does the same as the previous but returns immediatelly. If there is no value in cache, returns a location with 'Unknown'.
