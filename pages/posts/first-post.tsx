import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Link from "next/link";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Container, Dropdown } from "@nextui-org/react";
import DataChart from "../DataChart";

export default function FirstPost() {
  return (
    <>
      <div className="container-fluid">
        <header>
          <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <span className="fs-4"> DataViz</span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <Link legacyBehavior href="/" passHref>
                <a
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  Home
                </a>
              </Link>

              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="#"
              >
                Data
              </a>
              <Link legacyBehavior href="/posts/references" passHref>
                <a
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  References
                </a>
              </Link>
            </nav>
          </div>
        </header>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        ></script>

        <div className="row">
          <DataChart />
          <div className="col">
            <h2> Query Selection</h2>
            <div className="container">
              <div className="col">
                <div className="p-3 "></div>
                <Dropdown>
                  <Dropdown.Button flat>Time Period</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item key="housing">
                      Housing Crisis (USA)
                    </Dropdown.Item>
                    <Dropdown.Item key="gulf">Gulf War</Dropdown.Item>
                    <Dropdown.Item key="covid">COVID-19</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>{" "}
                <div className="p-3 "></div>
                <Dropdown>
                  <Dropdown.Button flat>Financial Data</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item key="gdp">GDP</Dropdown.Item>
                    <Dropdown.Item key="currency">
                      Currency Exchange
                    </Dropdown.Item>
                    <Dropdown.Item key="faang">FAANG Stock Price</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="p-3 "></div>
                <Dropdown>
                  <Dropdown.Button flat>Calculation</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item key="peak">Highest Peak</Dropdown.Item>
                    <Dropdown.Item key="rolling">Rolling Average</Dropdown.Item>
                    <Dropdown.Item key="growth">% Growth</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
