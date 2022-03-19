# Server and Api
Backend based on nodejs, express and mongoDB with mongoose.

## Installation

Run thes commands to setup the server:

To install dependencies:
```zhs
npm install
```

To popullate DB:
```zhs
node seeds.js
```

To start server:
```zhs
npm start
```

## Api routes:

| METHOD | ENDPOINT | DESCRIPTION |
---------|----------|-------------|
| GET | '/phones' | Get all phones catalog entries |
| POST | '/phones' | Create new phone entry |
| PATCH | '/phones/:id' | Update phone entry |
| DELETE | '/phones/:id' | Delete phone entry |


## References: 

Phone descriptions: http://www.chiquitoipsum.com/
Phone photos and details: https://www.phonehouse.es/
