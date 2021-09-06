import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

function CreateGaleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onClickImgOpen,
  changeSrc,
}) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={() => {
          changeSrc({ largeImageURL });
          onClickImgOpen();
        }}
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
}

CreateGaleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClickImgOpen: PropTypes.func,
  changeSrc: PropTypes.func,
};

export default CreateGaleryItem;
