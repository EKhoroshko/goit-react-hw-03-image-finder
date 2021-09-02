import { Component } from 'react';
import './App.css';
import getImages from './servise/getImages.js';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    value: '',
    isLoading: false,
    gallery: [],
    page: 1,
  };

  onChangeState = value => {
    this.setState({ value: value });
  };

  componentDidMount(prevState) {
    // if (prevState.value !== this.state.value) {
    this.getApiImages();
  }
  //}

  getApiImages() {
    const { value, page } = this.state;
    this.setState({ isLoading: true });
    getImages
      .getImagesPixiby(value, page)
      .then(({ hits }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeState}></Searchbar>
        <ImageGallery gallery={this.state.gallery} />
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
