/**
 *Db connection
 */

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "mysql",
        database: process.env.DB_NAME || "resturang",
    },
});

const bookshelf = require("bookshelf")(knex);

const models = {};
models.Reservation = require("../models/reservation")(bookshelf);
models.Reservation_time = require("../models/reservation_time")(bookshelf);

module.exports = {
    bookshelf,
    ...models,
};
