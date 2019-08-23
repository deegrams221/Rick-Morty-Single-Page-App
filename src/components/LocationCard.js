import React from "react";
import {Card} from "semantic-ui-react";

export default function LocationCard({location}) {
  return ( 
    <Card>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Meta>
          Type: <em>{location.type}</em>
        </Card.Meta>
        <Card.Description>
          Dimension: <strong>{location.dimension}</strong>
        </Card.Description>
        <Card.Description>
          Residents: <strong>{location.residents}</strong>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}