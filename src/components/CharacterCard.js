import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";

export default function CharacterCard({character}) {
  return ( 
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          Status: <em>{character.status}</em>
        </Card.Meta>
        <Card.Description>
          Species: <strong>{character.species}</strong>
        </Card.Description>
        <Card.Description>
          Gender: <strong>{character.gender}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name = "user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}