import React from 'react';
import axios from 'axios';
import {addUsers} from '../actions/users';
import Header from "./Header";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {Container} from "semantic-ui-react";

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                console.log(response.data);
                this.props.addUsers(response.data.results);
            })
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <UsersList/>
                </Container>
            </div>
        )
    }
}

export default connect(null, {addUsers})(App);
