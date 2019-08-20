// var ca = yourToken;
// var base64Url = ca.split('.')[1];
// var decodedValue = JSON.parse(window.atob(base64Url));

export const decodeToken = (token) => {
    var base64Url = token.split('.')[1];
    return JSON.parse(window.atob(base64Url))
};