var React = require('react');
var ons = require('onsenui');
var Ons = require('react-onsenui');


export default React.createClass({
  getInitialState: function () {
    return {
      username: '',
      password: '',
      vegetables: [
        'Tomato',
        'Cucumber',
        'Onion',
        'Eggplant',
        'Cabbage'
      ],
      selectedVegetable: 'Onion'
    };
  },

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Form input</div>
      </Ons.Toolbar>
    );
  },

  handleClick: function () {
    if (this.state.username === 'john' && this.state.password === 'test') {
      navigator.pushPage({ component: WeatherPage });
      ons.notification.alert('You are now signed in!');
    }
    else {
      ons.notification.alert('Username or password incorrect!');
    }
  },

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  },

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  },

  handleVegetableChange(vegetable) {
    this.setState({ selectedVegetable: vegetable });
  },

  renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
          />
        </label>
        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  },

  renderRadioRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Radio
            inputId={`radio-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
        </label>
        <label htmlFor={`radio-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  },

  render: function () {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <section style={{ textAlign: 'center' }}>
          <p>
            <Ons.SearchInput
              placeholder='Search' />
          </p>
          <p>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              placeholder='Username' />
          </p>
          <p>
            <Ons.Input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              modifier='underbar'
              type='password'
              float
              placeholder='Password' />
          </p>
          <p>
            <Ons.Button onClick={this.handleClick}>Sign in</Ons.Button>
          </p>
        </section>

        <Ons.List
          dataSource={this.state.vegetables}
          renderHeader={() => <Ons.ListHeader>Radio buttons</Ons.ListHeader>}
          renderRow={this.renderRadioRow}
        />

        <Ons.List
          dataSource={this.state.vegetables}
          renderHeader={() => <Ons.ListHeader>Checkboxes</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow}
        />
      </Ons.Page>
    );
  }
});


