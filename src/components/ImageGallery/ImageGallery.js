import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';
import CreateGaleryItem from '../ImageGalleryItem/ImageGalleryItem';

function CreateImageList({ gallery }) {
  return (
    <ul className={css.ImageGallery}>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <CreateGaleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

CreateImageList.propTypes = {
  gallery: PropTypes.array,
};

export default CreateImageList;
