import { FC, useState } from 'react';
import { createApi } from 'unsplash-js';
import { Input, Button, Spin, Row, Col } from 'antd';
import { ApiResponse } from 'interfaces';
import Gallery from './galery';
//it hase limit 50requsets per hour
const api = createApi({
  accessKey: 'VjCIakVg001jbMgozPYZQmSOm2n26Izt80U7eZgsOyo',
});

const ApiPage: FC = () => {
  const [data, setPhotosResponse] = useState<ApiResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState('stop war in ukraine');

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.search
      .getPhotos({ query: searchQuery })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <Row justify="center" gutter={[8, 8]}>
          <Col span={18}>
            <Input
              placeholder="Search for photos"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              autoFocus
            />
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
      </form>
      {data ? (
        <div>
          {data.errors ? (
            <div>
              <div>{data.errors[0]}</div>
              <div>PS: Make sure to set your access token!</div>
            </div>
          ) : (
            <Gallery photos={data.response?.results} />
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <Spin tip="Progressing..." size="large" />
        </div>
      )}
    </div>
  );
};

export default ApiPage;
