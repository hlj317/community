const STATIC_PORT = 2001;

const env = process.env.NODE_ENV;

module.exports = {
    assetsPrefix: "assets",
    devStaticHost: `//172.17.32.32:${STATIC_PORT}`,
    port: STATIC_PORT,
    productionAsset: env === "production",
    dev: {
        redis: {
            host: "127.0.0.1",
            port: 6379,
        },
    },
    production: {
        redis: {
            host: "127.0.0.1",
            port: 6379
        }
    }
};

