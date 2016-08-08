import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import {darkBlack} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>

          <p style={{ fontSize: '55px', margin: '50px 0 0 0' }}>
            <a href="/" style={{ textDecoration: 'none', color: darkBlack }}>KATRINE BURKITT</a>
          </p>
          <div>
            <FlatButton label="Paintings" style={{margin: '0 25px 0 25px'}}/>
            <FlatButton label="Cartoons" style={{margin: '0 25px 0 25px'}}/>
            <FlatButton label="Sketches" style={{margin: '0 25px 0 25px'}}/>
            <FlatButton label="About" style={{margin: '0 25px 0 25px'}}/>
          </div>
          <img src="/img/2. Burkitt- Self-Portrait-Triptych.JPG" style={{ width: '1200px', margin: '50px 0 90px 0' }}/>
          <footer style={{ color: '#ebebeb' }}>
            <p>©2016 Katrine Burkitt</p>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
