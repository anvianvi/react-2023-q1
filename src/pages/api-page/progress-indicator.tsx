import { Spin } from 'antd';

const ProgressIndicator = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
    >
      <Spin size="large" tip="Progressing..." data-testid="spin-bar" />
    </div>
  );
};

export default ProgressIndicator;
