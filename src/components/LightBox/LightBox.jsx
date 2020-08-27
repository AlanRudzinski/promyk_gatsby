import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightboxComponent = ({
  index: initialIndex, onClose, isOpen, images,
}) => {
  const [index, setIndex] = useState(initialIndex);
  useEffect(() => setIndex(initialIndex), [initialIndex]);

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={onClose}
          onMovePrevRequest={() => setIndex((index + images.length - 1) % images.length)}
          onMoveNextRequest={() => setIndex((index + 1) % images.length)}
        />
      )}
    </div>
  );
};

LightboxComponent.propTypes = {
  index: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

LightboxComponent.defaultProps = {
  index: 0,
  isOpen: false,
  onClose: null,
};

export default LightboxComponent;
