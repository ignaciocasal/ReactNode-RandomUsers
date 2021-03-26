import React from 'react';
import {Card, Icon, Image, Item} from "semantic-ui-react";

const User = ({name, location, email, picture, nat, phone}) => {
    return (
        <Card>
            <Image src={picture.large} alt={name.first} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{name.first} {name.last}</Card.Header>
                <Card.Meta>
                    <Image src={`https://www.countryflags.io/${nat}/flat/16.png`} alt={name.first} style={{verticalAlign: 'text-bottom'}}/>
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
    );
};
export default User;
