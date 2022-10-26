import * as React from 'react';
import { Cascader } from 'tdesign-react';
import './style.css';

const options = [
  { value: 1, label: '1', children: true },
  { value: 2, label: '2', children: true },
  { value: 3, label: '3', children: true },
];

export default function App() {
  return (
    <div>
      <Cascader filterable options={options as any} />
    </div>
  );
}
