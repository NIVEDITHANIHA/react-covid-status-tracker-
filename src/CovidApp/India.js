import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StateData from "./StateData";
import Axios from "axios";

export default class India extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    Axios.get("https://disease.sh/v3/covid-19/countries/india").then(
      (response) => {
        this.setState({ data: response.data });
      }
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img src="" alt="" />
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card className="bg-primary" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Total Cases</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card className="bg-warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Active cases</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card className="bg-success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Recovered</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card className="bg-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Deaths</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <StateData />
        </div>
      </div>
    );
  }
}
