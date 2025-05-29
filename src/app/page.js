import React from 'react';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

const Page = () => {
  return (
    <ConfigProvider>
      <div>Main page</div>
    </ConfigProvider>
  );
};

export default Page;
