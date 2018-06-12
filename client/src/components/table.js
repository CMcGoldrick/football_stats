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
        columns: [
          {
            Header: "Status",
            accessor: "sport_event_status.status"
          },
          {
            Header: "Match Status",
            accessor: "sport_event_status.match_status"
          },
          {
            Header: "Home Score",
            accessor: "sport_event_status.home_score"
          },
          {
            Header: "Away Score",
            accessor: "sport_event_status.away_score"
          }
        ]
      }
    ];

const tournament_round = [
      {
        Header: "Tournament Round",
        columns: [
          {
            Header: "Type",
            accessor: "sport_event.tournament_round.type"
          },
          {
            Header: "Number",
            accessor: "sport_event.tournament_round.number"
          }
        ]
      }
    ];

const season = [
      {
        Header: "Season",
        columns: [
          {
            Header: "Id",
            accessor: "sport_event.season.id"
          },
          {
            Header: "Name",
            accessor: "sport_event.season.name"
          },
          {
            Header: "start_date",
            accessor: "sport_event.season.start_date"
          },
          {
            Header: "end_date",
            accessor: "sport_event.season.end_date"
          },
          {
            Header: "year",
            accessor: "sport_event.season.year"
          },
          {
            Header: "tournament_id",
            accessor: "sport_event.season.tournament_id"
          }
        ]
      }
    ];

const tournament = [
      {
        Header: "Tournament",
        columns: [
          {
            Header: "Id",
            accessor: "sport_event.tournament.id"
          },
          {
            Header: "Name",
            accessor: "sport_event.tournament.name"
          }
        ]
      }
    ];

const sport = [
      {
        Header: "Sport",
        columns: [
          {
            Header: "Id",
            accessor: "sport_event.tournament.sport.id"
          },
          {
            Header: "Name",
            accessor: "sport_event.tournament.sport.name"
          }
        ]
      },

    ];

const category = [
      {
        Header: "Category",
        columns: [
          {
            Header: "Id",
            accessor: "sport_event.tournament.category.id"
          },
          {
            Header: "Name",
            accessor: "sport_event.tournament.category.name"
          },
          {
            Header: "Name",
            accessor: "sport_event.tournament.category.country_code"
          }
        ]
      }
    ];

const competitors = [
      {
        Header: "Competitors",
        columns: [
          {
            Header: "Id",
            accessor: "sport_event.competitors[0].id"
          },
          {
            Header: "Name",
            accessor: "sport_event.competitors[0].name"
          },
          {
            Header: "Country",
            accessor: "sport_event.competitors[0].country"
          },
          {
            Header: "Country Code",
            accessor: "sport_event.competitors[0].country_code"
          },
          {
            Header: "Abbreviation",
            accessor: "sport_event.competitors[0].abbreviation"
          },
          {
            Header: "Qualifier",
            accessor: "sport_event.competitors[0].qualifier"
          }
        ]
      }
    ];

const venue = [
      {
        Header: "Venue",
        columns: [
          {
            Header: "Id",
            accessor: "sport_event.venue.id"
          },
          {
            Header: "Name",
            accessor: "sport_event.venue.name"
          },
          {
            Header: "Capacity",
            accessor: "sport_event.venue.capacity"
          },
          {
            Header: "City Name",
            accessor: "sport_event.venue.city_name"
          },
          {
            Header: "Country Name",
            accessor: "sport_event.venue.country_name"
          },
          {
            Header: "Map Coordinates",
            accessor: "sport_event.venue.map_coordinates"
          }
        ]
      }
    ];

// "sport_event_status": {
// "status": "closed",
// "match_status": "ended",
// "home_score": 0,
// "away_score": 0,
// "period_scores": [
// {
// "home_score": 0,
// "away_score": 0,
// "type": "regular_period",
// "number": 1
// },
// {
// "home_score": 0,
// "away_score": 0,
// "type": "regular_period",
// "number": 2
// }
// ]
// }

const period_scores = [
      {
        Header: "Period Scores",
        columns: [
          {
            Header: "Home Score",
            accessor: "sport_event_status.period_scores.home_score"
          },
          {
            Header: "Away Score",
            accessor: "sport_event_status.period_scores.away_score"
          },
          {
            Header: "Type",
            accessor: "sport_event_status.period_scores.type"
          },
          {
            Header: "Number",
            accessor: "sport_event_status.period_scores.number"
          }
        ]
      }
    ];





class Table extends Component {


  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch("/results").then(function(response) {

      return response.json();

    }).then(function(myJson) {

      console.log("myJson",myJson);

      this.setState({
        list: myJson.results
      });

    }.bind(this));
  }

  

  render() {
    const results  = this.state.list;
    return (
      <div>
        <ReactTable
          data={results}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  Boom!
                </em>
                <br />
                <br />
                <ReactTable
                  data={results}
                  columns={tournament_round}
                  defaultPageSize={1}
                  showPagination={false}
                />
                <br />
                <br />
                <ReactTable
                  data={results}
                  columns={season}
                  defaultPageSize={1}
                  showPagination={false}
                />
                <br />
                <br />
                <ReactTable
                  data={results}
                  columns={tournament}
                  defaultPageSize={1}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        <br />
                        <ReactTable
                          data={results}
                          columns={sport}
                          defaultPageSize={1}
                          showPagination={false}
                        />
                        <br />
                        <br />
                        <ReactTable
                          data={results}
                          columns={category}
                          defaultPageSize={1}
                          showPagination={false}
                        />
                      </div>
                    );
                  }}
                />
                <br />
                <br />
                <ReactTable
                  data={results}
                  columns={competitors}
                  defaultPageSize={2}
                  showPagination={false}
                />
                <br />
                <br />
                <ReactTable
                  data={results}
                  columns={venue}
                  defaultPageSize={1}
                  showPagination={false}
                />
                <br />
                <ReactTable
                  data={results}
                  columns={period_scores}
                  defaultPageSize={2}
                  showPagination={false}
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