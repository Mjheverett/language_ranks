const host = "lallah.db.elephantsql.com";
const database = "czdxxxoi";
const user = "czdxxxoi";
const password = "FRHIkPo9rYmAxj5njPKX74sjra_PVh1F";

const pgp = require("pg-promise")({
    query: function (e) {
        console.log("QUERY:", e.query);
    },
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
};

const db = pgp(options);

module.exports = db;
