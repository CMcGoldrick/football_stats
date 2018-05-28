
import React, { Component } from 'react';
import axios from 'axios';
class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        axios.get("/results")
        .then(response => {
            console.log(response.data.results)
            this.setState({
                lists: response.data.results
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (
                        <div className="single-list" key={list.sport_event.id}>
                            <h4>{list.sport_event.season.start_date}</h4>
                            <h4>{list.sport_event.season.name}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListsContainer;