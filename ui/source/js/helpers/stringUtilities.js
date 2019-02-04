function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function stripSpecialCharacters(string) {
    return string.replace(/[^a-zA-Z-]/g, '');
}

export {capitalizeFirstLetter, stripSpecialCharacters};