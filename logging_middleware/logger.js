require("dotenv").config();

const axios = require("axios");

async function Log(
  stack,
  level,
  packageName,
  message
) {
  const time = new Date().toISOString();

  try {
    if (process.env.ACCESS_TOKEN) {
      await axios.post(
        "http://4.224.186.213/evaluation-service/logs",
        {
          stack,
          level,
          package: packageName,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
    }

    process.stdout.write(
      `[${time}] [${stack}] [${level}] [${packageName}] ${message}\n`
    );
  } catch (error) {
    process.stdout.write(
      `[${time}] Logging Failed\n`
    );
  }
}

module.exports = { Log };