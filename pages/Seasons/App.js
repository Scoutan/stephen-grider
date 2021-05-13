import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import styles from '../../styles/Seasons.module.css';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div><Spinner message="Please accept location request" /></div>;
  }

  render() {
    return (
      <div className={styles.border}>
        {this.renderContent()}
      </div>
    )
  }
}

export default App;