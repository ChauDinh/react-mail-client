import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import NavigationList from "./NavigationList";

export class NavigationBar extends Component {
  constructor() {
    super();
    this.onCompose = this.onCompose.bind(this);
  }

  onCompose(event) {
    event.preventDefault();
    alert(`You've clicked Compose button`);
  }

  render() {
    return (
      <aside className="navigation-bar">
        <Button className="navigation-bar__compose-button" variant="contained" color="secondary" onClick={this.onCompose}>
          Compose
        </Button>
        <NavigationList />
      </aside>
    )
  }
}

export default NavigationBar
