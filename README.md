# **Qupid**
Qupid is an IoT-based mobile marketing platform that rethinks the way businesses interact with consumers and reinvigorates the in-store purchasing experience.

Qupid integrates iBeacon technology with an iOS native app and web app to provide a B2C solution that distributes advertisements/coupons to shoppers in real-time, based on their vicinity to the beacons. Business owners are provided data-driven statistics regarding consumer trends while bargain-hunters are rewarded with curated coupons by their favorite brick-and-mortar stores.

## Team
  - [Blake Fleck](https://github.com/blakeFleck)
  - [James Gu](https://github.com/james-gu)
  - [Susan Hong](https://github.com/keepthemonochrome)
  - [Joshua Peng](https://github.com/pengjoshua)

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage
### Users
Install iOS app from 
```sh

```

- Create a user account
- Estimote beacons are constantly emitting low energy bluetooth signals which ios devices can pick up, coupons are automatically sent to users via push notifications when they are within close proximity of an Estimote beacon
- Users can browse through coupons and sort by time left, date, savings, used, expired, activated, store, etc.
- When users select a coupon to use, the app will generate a unique QR code which can be scanned at checkout

### Business Owners  
- Create a business owner account
- Business owners can register Estimote beacons that are placed in various areas/sections in their stores
- Business owners can utilize the business portal to create coupons, schedule coupons to be dispatched, and manage flash sales

## Technologies

- Estimote location beacons with iBeacon technology
- React, Redux, React-Native
- Node, Express
- MySQL database

## Development

- Server deployed using Heroku
- MySQL database deployed with Google Cloud

### Installing Dependencies

From within the /client/iHearth directory:

```sh
npm install
rnpm link
react-native run-ios
```
From within the /server directory:

```sh
npm install
nodemon index.js
```

### Roadmap

View our project roadmap [Github](https://github.com/conscientiouscucumbers/qupid/issues) or [Waffle](https://waffle.io/conscientiouscucumbers/qupid)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
