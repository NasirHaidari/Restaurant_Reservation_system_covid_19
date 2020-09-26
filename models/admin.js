module.exports = (bookshelf) => {
    return bookshelf.model("Admin", {
        tableName: "admin",
    });
};
