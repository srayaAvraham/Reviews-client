import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchStringAndFetch, setScoreAndFetch } from './reviewsSlice';
import { Button, Space, Input, Select } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const options = [
  { name: "All", value: 0 },
  { name: "One", value: 1 },
  { name: "Two", value: 2 },
  { name: "Three", value: 3 },
  { name: "Four", value: 4 },
  { name: "Five", value: 5 },
];
export function Filter() {

  const dispatch = useDispatch();

  const onSearch = value => dispatch(setSearchStringAndFetch(value));

  const onChange = value => dispatch(setScoreAndFetch(value));
  

  return (
    <div>
      <Space >
        <Input.Group compact>
          <Button type="primary" icon={<StarOutlined />}>
          </Button>
          <Select onChange={onChange} defaultValue={0} style={{ width: 120 }} >
            {options.map((item) => <Option  value={item.value}>{item.name}</Option>)}
          </Select>
        </Input.Group>
        <Input.Group compact>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Input.Group>
      </Space>
    </div>
  );
}
