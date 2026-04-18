module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "equinox-strapi-secret-change-in-prod"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "equinox-api-token-salt-change-in-prod"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "equinox-transfer-salt-change-in-prod"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", false),
    promoteEE: env.bool("FLAG_PROMOTE_EE", false),
  },
});
