const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return false;
    }

    const [authType, token] = req.headers.authorization.split(" ");

    if (authType.toLowerCase() !== "bearer") {
        return false;
    }

    if (!token) {
        res.status(401).send({
            status: "fail",
            data: "No token found in request headers.",
        });
        return;
    }

    let payload = null;
    try {
        payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
        res.status(403).send({
            status: "fail",
            data: "Authentication Failed.",
        });
        throw err;
    }

    next();
};

module.exports = {
    validateToken,
};
