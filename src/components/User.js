import React from 'react';
import {Card, Icon, Image, Item, Grid} from "semantic-ui-react";

const User = ({name, location, email, picture, nat, phone}) => {
    return (
        <Grid.Column mobile={16} tablet={8} computer={4} stackable="true" doubling="true">
            <Card centered>
                <Image src={picture.large} alt={name.first} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{name.first} {name.last}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{location.city}, {location.country}</span>
                    </Card.Meta>
                    <Card.Description>
                        {email}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign={'center'}>
                    <a>
                        <Icon name='phone'/>
                        {phone}
                    </a>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
};
export default User;
