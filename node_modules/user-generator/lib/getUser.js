const https = require('https');
const { route, nationalities } = require('./api');
const flatten = require('./flatten');

/**
 * Get a random user object
 * @param {string} nat the asked nationality
 * @return {json} return the random user object
 */
function getUser(nat) {
    let url = route;
    if (nat) {
        if (!nationalities.includes(nat)) {
            return `Please inject as param one of the following nationalities: ${nationalities}`;
        }
        url += `?nat=${nat}`;
    }

    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                const sanitized = flatten(data);
                resolve(sanitized);
            });
        }).on('error', (e) => { throw e.message; });
    });
}

module.exports = getUser;
