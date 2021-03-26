import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import {Card} from "semantic-ui-react";

const UsersList = (props) => {

    const renderUserList = () => {
        return (
            <Card.Group itemsPerRow={4} stackable={true} doubling={true}>
                {props.users.map((user) => <User key={user.login.uuid} {...user} />)}
            </Card.Group>
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
