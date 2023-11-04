# Spiffy-Shirts

An E-commerce Shirt Selling Store.

Live Hosted At: [spiffy-shirts.netlify.app ](https://spiffy-shirts.netlify.app/)

[![Untitled.png](https://i.postimg.cc/Tw9k02vJ/Untitled.png)](https://postimg.cc/WFd6bv3d)

[![prod.png](https://i.postimg.cc/Kj6gS75v/prod.png)](https://postimg.cc/bSRv1tMK)

[![Untitled.png](https://i.postimg.cc/fbxD2tKd/Untitled.png)](https://postimg.cc/FfsM1KwF)

[![Untitled.png](https://i.postimg.cc/N0Tmd4Sx/Untitled.png)](https://postimg.cc/hJDXj9SJ)
## API Reference Architecture
[![attachment-05-Designing-architecture-of-our-project-attachment-lyst5951-page-0001.jpg](https://i.postimg.cc/5NHHqPwX/attachment-05-Designing-architecture-of-our-project-attachment-lyst5951-page-0001.jpg)](https://postimg.cc/4mgNXQ2G)

## Features/Tech Stack

- Single Page Application built over ReactJS
- NodeJS RunTime ENV.
- REST API with ExpressJS
- NoSql DataBase used (MongoDB)
- Cross platform, A little Exposure to PWA
- Payment Gateway Integrated with STRIPE
- UI Design/CSS Frameworks: Bootstrap, Styled Components

## Acknowledgements

To all these awesome NPM Packages:
- NodeMailer
- React-Toastify
- Lodash
- Express-Validator
- Nodemon
- Jsonwebtoken
- Formidable
- Dotenv
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SECRET`  for JWT Token

`FROM_EMAIL` Email To Used for Sending Rest Pass Links

`RP_Link` Where To Redirect After User Verify Reset Pass.

`AUTH_PASS` Generate From Mail Account

`AUTH_USER` Generate From Mail Account

`STRIPE_SECKEY` Stripe Secret Key

`REACT_APP_BACKEND` API Link of Backend

`STRIPE_PUBKEY` Stripe Public Key


## Installation

Install project with npm

```bash
  git clone https://github.com/ThisIsFaar/spiffy-shirts.git
  git checkout main
  cd spiffy-shirts
  npm install
  cd client
  npm install
```
Setup ENV. variables and run app with ```npm start``` on both dir root/frontend
## Authors

- [@ThisIsFaar](https://www.github.com/thisisfaar)
- [@Vipukr059](https://www.github.com/vipulkr059)
