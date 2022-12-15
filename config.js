const CONFIG = {
    PORT: process.env.PORT || 3000,
    JWT_TOKEN: process.env.JWT_TOKEN || "NirdoshJWTSecret",
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://Group28_database:4tZ5x2HmbYcIlEwk@cluster0.p5ih0di.mongodb.net/tailwebs?retryWrites=true&w=majority",
}

module.exports = { CONFIG }