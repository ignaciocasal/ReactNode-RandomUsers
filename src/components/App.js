import React, {useEffect} from 'react';
import axios from 'axios';
import {addUsers} from '../actions/users';
import Header from "./Header";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {Container} from "semantic-ui-react";

const serverDemo = 'https://randomuser.me/api/?page=1&results=16'
const serverNode = 'http://localhost:3000/users'
const isDemo = true

const App = (props) => {

    useEffect(() => fetchUsers(), []);

    const fetchUsers = () => {
        axios.get(isDemo?serverDemo:serverNode)
            .then(response => {
                props.addUsers(response.data.results);
            })
    }

    return (
        <div>
            <Header/>
            <Container>
                <UsersList/>
            </Container>
        </div>
    )
}

export default connect(null, {addUsers})(App);
