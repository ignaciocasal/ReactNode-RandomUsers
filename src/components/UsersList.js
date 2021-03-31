import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import {Card, Grid} from "semantic-ui-react";

const UsersList = (props) => {

    const renderUserList = () => {
        return (
            <Grid>
                {props.users.map((user) => <User key={user.login.uuid} {...user} />)}
            </Grid>
        )
    }

    return (
        <div>
            {props.users && renderUserList()}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};
export default connect(mapStateToProps)(UsersList);
