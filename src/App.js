import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';
import getImages from './servise/getImages.js';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    value: '',
    isLoading: false,
    gallery: [],
    page: 1,
  };

  onChangeState = value => {
    this.setState({ value: value, page: 1, gallery: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.getApiImages();
    }
  }

  getApiImages = () => {
    const { page, value } = this.state;
    this.setState({ isLoading: true });

    getImages(value, page)
      .then(hits => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch()
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { gallery, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeState}></Searchbar>
        <ImageGallery gallery={gallery} />
        {isLoading && <Loader />}
        {gallery.length > 0 ? <Button onClick={this.getApiImages} /> : null}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
