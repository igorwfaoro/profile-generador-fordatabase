const axios = require('axios').default;
const delay = require('delay');
const fs = require('fs');

async function app() {

    // {
    //     gender: 'male',
    //     name: { title: 'Mr', first: 'Reinaldo', last: 'Duarte' },
    //     location: {
    //       street: [Object],
    //       city: 'Atibaia',
    //       state: 'Goiás',
    //       country: 'Brazil',
    //       postcode: 99003,
    //       coordinates: [Object],
    //       timezone: [Object]
    //     },
    //     email: 'reinaldo.duarte@example.com',
    //     login: {
    //       uuid: '8372fe4f-d9fc-46c6-aa71-4f333a63f3fb',
    //       username: 'sadostrich567',
    //       password: 'wallace',
    //       salt: 'pnmPxn0n',
    //       md5: '34479016fd447f6828a3bb8eae584bb7',
    //       sha1: 'bdaf2b71b1142f6af45beaba93c73fcd17724337',
    //       sha256: '46726fad852e41344e8cfd9ba62a1078b1333c2fe9e3cbc09c33d3b3ef7539fe'
    //     },
    //     dob: { date: '1972-02-03T02:38:45.332Z', age: 49 },
    //     registered: { date: '2014-02-24T04:21:57.018Z', age: 7 },
    //     phone: '(94) 1656-8096',
    //     cell: '(81) 9769-1127',
    //     id: { name: '', value: null },
    //     picture: {
    //       large: 'https://randomuser.me/api/portraits/men/94.jpg',
    //       medium: 'https://randomuser.me/api/portraits/med/men/94.jpg',
    //       thumbnail: 'https://randomuser.me/api/portraits/thumb/men/94.jpg'
    //     },
    //     nat: 'BR'
    //   }

    const users = (await axios.get('https://randomuser.me/api', {
        params: {
            results: 200,
            nat: 'br'
        }
    })).data.results;

    const sql = users.map(u =>
        `insert into Users (\`Key\`, Name, Username, ProfileImage, IsAccount, IsFake) values ('${u.login.uuid}', '${u.name.first} ${u.name.last}', '${u.login.username}', '${u.picture.large}', TRUE, TRUE);`
    ).join('\n');

    fs.writeFileSync('./users.sql', sql, { encoding: 'utf-8' });
}

app();