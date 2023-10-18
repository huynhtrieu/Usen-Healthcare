import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const Error: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="申し訳ありませんが、アクセスしたページは存在しません。"
    extra={
      <Link to='/'>
        <Button className="login" label="ホームに戻る"></Button>
      </Link>
    }
  />
);

export default Error;