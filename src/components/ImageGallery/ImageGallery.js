import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';
import CreateGaleryItem from '../ImageGalleryItem/ImageGalleryItem';

function CreateImageList({ gallery, onClickImgOpen, changeSrc }) {
  return (
    <ul className={css.ImageGallery}>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <CreateGaleryItem
          onClickImgOpen={onClickImgOpen}
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          changeSrc={changeSrc}
        />
      ))}
    </ul>
  );
}

CreateImageList.propTypes = {
  gallery: PropTypes.array,
  onClickImgOpen: PropTypes.func,
  changeSrc: PropTypes.func,
};

export default CreateImageList;
