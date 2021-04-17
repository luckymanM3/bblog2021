module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: process.env.DATABASE_HOST,
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "bblog"),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
