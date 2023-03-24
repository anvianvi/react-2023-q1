import { Footer } from 'antd/es/layout/layout';
import './style.sass';

export default function MyFooter() {
  return (
    <Footer className="footer" style={{ textAlign: 'center' }}>
      Created by
      <a href="https://github.com/anvianvi" target="_blank" rel="noreferrer noopener">
        {' '}
        Pavel Viarbitsi{' '}
      </a>
      in March 2023 for
      <a href="https://rs.school/angular/" target="_blank" rel="noreferrer noopener">
        {' '}
        The Rolling Scopes
      </a>
    </Footer>
  );
}
