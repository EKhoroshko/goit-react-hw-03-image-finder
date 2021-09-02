import Loader from 'react-loader-spinner';
import { Component } from 'react';

class loader extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

export default loader;
