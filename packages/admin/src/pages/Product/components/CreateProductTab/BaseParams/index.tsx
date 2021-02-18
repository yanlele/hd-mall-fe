import React, { FC } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './style.less';

// 基本参数组件
const BaseParams: FC = () => {
  return (
    <>
      <Form.List name="params">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...field}
                  name={[field.name, 'key']}
                  fieldKey={[field.fieldKey, 'key']}
                  rules={[{ required: true, message: 'Missing Key' }]}>
                  <Input placeholder="key" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'value']}
                  fieldKey={[field.fieldKey, 'value']}
                  rules={[{ required: true, message: 'Missing Value' }]}>
                  <Input placeholder="value" />
                </Form.Item>
                <MinusCircleOutlined className={styles.dynamicDeleteButton} onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default BaseParams;
