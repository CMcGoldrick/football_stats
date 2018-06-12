import React, { Component } from 'react';
// import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import axios from 'axios';

class Table extends Component {


  constructor() {
    super();
    this.state = {
      // data: makeData(),
      list: []
    };
  }

  componentDidMount() {
      axios.get("/results")
      .then(response => {
          console.log(response.data.results)
          this.setState({
              list: response.data.results
          })
          console.log(this.state);
      })
      .catch(error => console.log(error,"error"))
  }

//   "id": "sr:match:12055652",
// "scheduled": "2018-04-01T10:00:00+00:00",
// "start_time_tbd": false,
// "tournament_round": {
// "type": "group",
// "number": 30
// },
 
  render() {

    return (
      <div>
      {this.state.list !== undefined &&
        <ReactTable
          data={this.state.list}

          columns={[
            {
              Header: "Sport Event",
              id: "sport_event-id",
              columns: [
                {
                  Header: "Id",
                  accessor: "sport_event.id"
                },
                {
                  Header: "scheduled",
                  accessor: "sport_event.scheduled"
                },
                {
                  Header: "Start Time TBD",
                  accessor: "sport_event.start_time_tbd"
                }
              ]
            },
            {
              Header: "Sport Event Status",
              id: "sport_event_status-id",
              columns: [
                {
                  Header: "Status",
                  accessor: "sport_event_status.status"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      }
        <br />
      </div>
    );
  }
}

export default Table;