//DB connection
const getDbConnection = () => {
    return require("knex")({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST || "localhost",
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD || "mysql",
            database: process.env.DB_NAME || "resturang",
        },
    });
};

const getAll = () => {
    return getDbConnection().select().from("reservations");
};

const store = (data) => {
    return getDbConnection().insert(data).into("reservations");
};

module.exports = {
    getAll,
    store,
};
