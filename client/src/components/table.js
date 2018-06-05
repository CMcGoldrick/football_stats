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
 
  render() {

    return (
      <div>
      {this.state.list !== undefined &&
        <ReactTable
          data={this.state.list}

          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Id",
                  accessor: "sport_event.id"
                },
                // {
                //   Header: "Last Name",
                //   id: "lastName",
                //   accessor: d => d.lastName
                // }
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