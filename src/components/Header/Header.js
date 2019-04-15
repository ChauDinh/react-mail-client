import React, { Component } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import Login from "../Auth/Login";
import Register from "../Auth/Register";

export class Header extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    alert(`You've click the Search button`);
  }
  render() {
    return (
      <div>
        <header className="header">
          <span className="header__logo">Mail Mail</span>
          <form className="header__search-form" onSubmit={this.onSubmit}>
            <Input fullWidth className="header__search-field" />
            <Button type="submit" variant="contained" color="primary">
              <SearchIcon />
            </Button>
          </form>
          <Register />
          <Login />
        </header>
      </div>
    )
  }
}

export default Header
