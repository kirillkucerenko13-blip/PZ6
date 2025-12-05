function sum(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 0;
    }
    return a + b;
}

const user = {
    id: 1,
    name: "Test User"
};

function getUser() {
    return user;
}

module.exports = { sum, getUser };
