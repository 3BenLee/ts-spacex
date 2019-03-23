import * as React from "react";
import { Card } from "react-bootstrap";

export default function LaunchItem(props: any) {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{props.year}</Card.Subtitle>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>flight number: {props.number}</Card.Text>
      </Card.Body>
    </Card>
  );
}
