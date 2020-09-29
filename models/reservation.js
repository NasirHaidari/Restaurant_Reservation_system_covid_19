module.exports = (bookShelf) => {
    return bookShelf.model("Reservation", {
        tableName: "reservations",
        Reservation_time() {
            return this.belongsTo("reservation_time");
        },
    });
};
