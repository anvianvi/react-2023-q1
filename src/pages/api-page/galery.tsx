import { Photo } from 'interfaces';
import { useState } from 'react';
import { Modal } from 'antd';

type CardProps = {
  photo: Photo;
  onClick: () => void;
};

const Card = ({ photo, onClick }: CardProps) => (
  <div className="card" onClick={onClick} data-testid="card">
    <img className="img" src={photo.urls.regular} alt={photo.alt_description} />
    <div className="credit">
      <a
        className="credit-link"
        href={`https://unsplash.com/@${photo.user.username}`}
        target="_blank"
        rel="noreferrer"
      >
        {photo.user.name}
      </a>
    </div>
  </div>
);

type GalleryProps = {
  photos?: Photo[];
};

const Gallery = ({ photos = [] }: GalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleCardClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className="gallery" data-testid="gallery">
        {photos.map((photo: Photo) => (
          <Card key={photo.id} photo={photo} onClick={() => handleCardClick(photo)} />
        ))}
      </div>
      <Modal onCancel={handleCloseModal} footer={null} destroyOnClose centered>
        <div className="modal-info">
          <img
            className="modal-img"
            src={selectedPhoto?.urls.regular}
            alt={selectedPhoto?.alt_description}
          />
          <div className="credit">
            <a
              className="credit-link"
              href={`https://unsplash.com/@${selectedPhoto?.user.username}`}
              target="_blank"
              rel="noreferrer"
            >
              {selectedPhoto?.user.name}
            </a>
          </div>
          <div className="modal-description">{selectedPhoto?.alt_description}</div>
          <div className="modal-size">
            {selectedPhoto?.width} x {selectedPhoto?.height}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Gallery;
