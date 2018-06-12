import React, { Component } from 'react';
// import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import axios from 'axios';

const columns = [
  {
    Header: "Sport Event",
    columns: [
      {
        Header: "Id",
        accessor: "sport_event.id"
      },
      {
        Header: "scheduled",
        accessor: "sport_event.id"
      }
    ]
  },
  {
    Header: "Sport Event Status",
    columns: [
      {
        Header: "Status",
        accessor: "sport_event_status.status"
      },
      {
        Header: "Status",
        accessor: "sport_event_status.status"
      }
    ]
  }
];


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

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br />
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        Another Sub Component!
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
        <br />
      </div>
    );
  }
}

export default Table;