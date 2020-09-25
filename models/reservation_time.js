module.exports = (bookShelf) => {
    return bookShelf.model("Reservation_time", {
        tableName: "reservation_time",
        Reservation() {
            return this.hasMany("Reservation");
        },
    });
};
