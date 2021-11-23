# user-generator
A random profiles generator using the https://randomuser.me/ api

## Install
```
npm i user-generator
```

## Usage
```js
const getUser = require('user-generator');
const user = await getUser();
/*
{
  title: 'Mrs',
  firstname: 'Bella',
  lastname: 'Lilleland',
  gender: 'female',
  age: 28,
  birth: '1992-12-24T16:38:27.324Z',
  streetName: 'Jonas Dahls vei',
  streetNumber: 188,
  city: 'Sylling',
  state: 'Oppland',
  country: 'Norway',
  postcode: '3471',
  longitude: '179.9754',
  latitude: '53.8937',
  email: 'bella.lilleland@example.com',
  uuid: '279606d8-9e83-4336-8d4a-17eb14e05b4e',
  username: 'redbutterfly507',
  password: 'dorothy',
  passwordSha256: '3e5a808423befb94a7c3ccd433f313fc3df63d2f0e4d6f92c53c0b38435878e2',
  registered: '2015-05-06T02:47:40.778Z',
  phone: '39037290',
  cell: '43441920',
  largePicture: 'https://randomuser.me/api/portraits/women/8.jpg',
  mediumPicture: 'https://randomuser.me/api/portraits/med/women/8.jpg',
  thumbnail: 'https://randomuser.me/api/portraits/thumb/women/8.jpg',
  nationality: 'NO'
}
*/
```

## Options
- Nationality 
> au, br, ca, ch, de, dk, es, fi, fr, gb, ie, ir, no, nl, nz, tr, us
```js
const getUser = require('user-generator');
const frenchUser = await getUser('fr');
```


## Licence
[MIT License](https://github.com/joffreyverd/user-generator/blob/master/LICENSE)
