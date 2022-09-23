import React, { Component } from "react";
import Axios from "axios";
import { Accordion } from "react-bootstrap";

export default class stateData extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }

  componentDidMount() {
    Axios.get("https://data.covid19india.org/state_district_wise.json").then(
      (response) => {
        console.log(response.data);
        this.setState({ stateData: response.data });
      }
    );
  }

  render() {
    let keys = Object.keys(this.state.stateData);
    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion>
            {keys.map((itm, ky) => {
              let districts = this.state.stateData[itm].districtData;
              let district_keys = Object.keys(districts);

              let total_active = 0;
              let total_confirmed = 0;
              let total_deaths = 0;
              let total_recovered = 0;

              let district_list = [];
              for (let x in districts) {
                total_active += districts[x].active;
                total_confirmed += districts[x].confirmed;
                total_deaths += districts[x].deceased;
                total_recovered += districts[x].recovered;
                let ob = districts[x];
                ob["district_name"] = x;
                district_list.push(ob);
              }
              // console.log(district_list);

              return (
                <Accordion.Item eventKey={ky}>
                  <Accordion.Header>
                    {itm} -
                    <span className="bg-primary p-2 ml-4">
                      total cases -{total_confirmed}
                    </span>
                    <span className="bg-primary p-2 ml-4">
                      Active {total_active}
                    </span>
                    <span className="bg-primary p-2 ml-4">
                      recovered {total_recovered}
                    </span>
                    <span className="bg-primary p-2 ml-4">
                      Deaths {total_deaths}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <table className="table table -bordered table-striped">
                      <thead>
                        <tr>
                          <td>District</td>
                          <td>Confirmed</td>
                          <td>Active</td>
                          <td>recovered</td>
                          <td>Deaths</td>
                        </tr>
                      </thead>
                      <tbody>
                        {district_list.map((itm, ky) => {
                          return (
                            <tr>
                              <td>{itm.district_name}</td>
                              <td>{itm.confirmed}</td>
                              <td>{itm.active}</td>
                              <td>{itm.recovered}</td>
                              <td>{itm.deceased}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}
