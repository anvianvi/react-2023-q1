import { FC, useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import Gallery from './galery';
import { ApiResponse } from 'interfaces';
import ProgressIndicator from './progress-indicator';

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: 'VjCIakVg001jbMgozPYZQmSOm2n26Izt80U7eZgsOyo',
});

const ApiPage: FC = () => {
  const [data, setPhotosResponse] = useState<ApiResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsLoading(true);
      api.search
        .getPhotos({ query: 'belarus repressions' })
        .then((result) => {
          setPhotosResponse(result);
          setIsLoading(false);
        })
        .catch(() => {
          console.log('something went wrong!');
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      api.search
        .getPhotos({ query: searchQuery })
        .then((result) => {
          setPhotosResponse(result);
          setIsLoading(false);
        })
        .catch(() => {
          console.log('something went wrong!');
          setIsLoading(false);
        });
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    api.search
      .getPhotos({ query: searchQuery })
      .then((result) => {
        setPhotosResponse(result);
        setIsLoading(false);
      })
      .catch(() => {
        console.log('something went wrong!');
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <ProgressIndicator />;
  } else if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input type="text" value={searchQuery} />
          <button type="submit">Search</button>
        </form>
        <Gallery photos={data.response?.results} />
      </div>
    );
  }
};

export default ApiPage;
