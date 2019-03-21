import * as React from "react";
import { Button } from "react-bootstrap";

export default function SeeMoreButton(props: any) {
  return (
    <div>
      <h1>This is a button!</h1>
      <Button variant='info' onClick={props.clicked} />
    </div>
  );
}
