# **iHearth**

  **iHearth** Currently, there is a disconnect between customer traffic and the number of online reviews. iHearth provides a dynamic business-to-client store management system using the iBeacon technology platform to drive consumer traffic while cultivating in-depth client reviews. Users receive real-time coupons when they are in the vicinity of the iHearth. In turn, business owners are provided data-driven statistics for consumer trends and given the opportunity to collect online reviews.

## Team

  - Product Owner: Blake Fleck
  - Scrum Master: James Gu
  - Development Team Members: Susan Hong, Joshua Peng

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
- Create a user account
- Estimote beacons are constantly emitted a low energy bluetooth signal, coupons are automatically sent to users via push notification when they are within close proximity of an Estimote beacon 
- Users can browse through coupons and sort by used, expired, activated, store, etc.
- Users can select coupons to use which will bring up a randomly generated QR code for checkout
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
- Google Cloud MySQL client

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

View our project roadmap [Github](https://github.com/conscientiouscucumbers/iHearth/issues) or [Waffle](https://waffle.io/conscientiouscucumbers/iHearth)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
