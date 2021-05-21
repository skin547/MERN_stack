
module.exports.validate = (url) => {
    let url_expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    let regex = new RegExp(url_expression);
    console.log('validating url:' + url);
    return regex.test(url);
}