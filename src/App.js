import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import getImages from './servise/getImages.js';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    value: '',
    isLoading: false,
    gallery: [],
    page: 1,
    isShow: false,
    largeImageURL: '',
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
        if (hits.length === 0) {
          toast.error('Nothing found for your request', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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

  onClickImgOpen = () => {
    this.setState(({ isShow }) => ({
      isShow: !isShow,
    }));
  };

  changeSrc = ({ largeImageURL }) => {
    this.setState({ largeImageURL });
  };

  render() {
    const { gallery, isLoading, largeImageURL, isShow } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeState}></Searchbar>
        <ImageGallery
          gallery={gallery}
          onClickImgOpen={this.onClickImgOpen}
          changeSrc={this.changeSrc}
        />
        {isLoading && <Loader />}
        {gallery.length > 0 ? <Button onClick={this.getApiImages} /> : null}
        {isShow && (
          <Modal onClose={this.onClickImgOpen} largeImageURL={largeImageURL} />
        )}

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
