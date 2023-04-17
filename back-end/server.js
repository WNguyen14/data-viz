const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
oracledb.initOracleClient({
  libDir:
    "C:/Users/William/Desktop/SCHOOL/CIS4301/instantclient-basic-windows.x64-21.9.0.0.0dbru/instantclient_21_9",
});

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/query", (req, res) => {
  async function fetchDataCountry() {
    try {
      const connection = await oracledb.getConnection({
        user: "mohammad.yaaseen",
        password: "xrfEpNmbxgFnJcuWOUrPLm0Z",
        connectString: "//oracle.cise.ufl.edu/orcl",
      });

      const result = await connection.execute(
        "SELECT time, GDP.gdp / NULLIF(LAG(GDP.gdp) OVER (ORDER BY time), 0) AS GDP_change FROM GDP WHERE time between to_date( '12-mar-1947', 'dd-mon-yyyy' ) and to_date( '26-dec-1991', 'dd-mon-yyyy' ) ORDER BY time"
      );
      return result;
    } catch (error) {
      return error;
    }
  }

  fetchDataCountry()
    .then((dbRes) => {
      console.log(dbRes);
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
