/**
 * Clean the retrieved user object
 * @param {json} data the user object
 * @return {json} return the cleaned user object
 */
function flatten(data) {
    const json = JSON.parse(data);
    const user = json.results[0];
    return {
        title: user.name.title,
        firstname: user.name.first,
        lastname: user.name.last,
        gender: user.gender,
        age: user.dob.age,
        birth: user.dob.date,
        streetName: user.location.street.name,
        streetNumber: user.location.street.number,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        postcode: user.location.postcode,
        longitude: user.location.coordinates.longitude,
        latitude: user.location.coordinates.latitude,
        email: user.email,
        uuid: user.login.uuid,
        username: user.login.username,
        password: user.login.password,
        passwordSha256: user.login.sha256,
        registered: user.registered.date,
        phone: user.phone,
        cell: user.cell,
        largePicture: user.picture.large,
        mediumPicture: user.picture.medium,
        thumbnail: user.picture.thumbnail,
        nationality: user.nat,
    };
}

module.exports = flatten;
