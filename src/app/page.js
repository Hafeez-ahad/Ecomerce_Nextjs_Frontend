import React from 'react';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { redirect } from 'next/navigation';


const Page = () => {
  redirect('/main'); 
  return (
    <ConfigProvider>
    </ConfigProvider>
  );
};

export default Page;
