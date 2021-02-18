import React, { FC, useRef, useState } from 'react';
import { Form, Input, Button, Row, Col, InputNumber, Divider, FormInstance, message } from 'antd';
import { commonFormLayout } from '@src/common/consts';
import styles from './style.less';
import BaseCategorySelect from '@src/pages/Product/components/ProductCategoryTreeSelect/BaseCategorySelect';
import StatusSelect from '@src/pages/Product/components/CreateProductTab/StatusSelect';
import UploadFileComponent from '@src/components/biz/UploadFileComponent';
import { get } from 'lodash';
import { createProductRequest } from '@src/pages/Product/service';
// import { createProductRequest } from '@src/pages/Product/service';

const CreateProductTab: FC = () => {
  const formRef = useRef<FormInstance>();
  const [submitLoading, setSubmitLoading] = useState(false);

  // 提交
  const handleOnFinish = async (value: any) => {
    value.primary_image = get(value, 'primary_image.0.url', '');
    setSubmitLoading(true);
    try {
      await createProductRequest(value);
      message.success('创建成功');
      setSubmitLoading(false);
      formRef.current?.resetFields();
    } catch (e) {
      setSubmitLoading(false);
      message.error(e.message);
    }
  };

  return (
    <Form
      // @ts-ignore
      ref={formRef}
      className={styles.createProductTabContainer}
      {...commonFormLayout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleOnFinish}>
      <Divider orientation="left">基础信息</Divider>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="商品类别"
            name="category_id"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <BaseCategorySelect />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="名称" name="name" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="title" name="title" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="描述" name="desc" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="原价"
            name="original_cost"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="现价" name="price" rules={[{ required: true, message: 'Please input your password!' }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="库存" name="inventory" rules={[{ required: true, message: 'Please input your password!' }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="状态" name="status" rules={[{ required: true, message: 'Please input your password!' }]}>
            <StatusSelect />
          </Form.Item>
        </Col>
      </Row>

      <Divider orientation="left">主图上传</Divider>

      <Row>
        <Col span={12}>
          <Form.Item
            label="主图"
            name="primary_image"
            // rules={[{ required: true, message: '请上传主图！' }]}
          >
            <UploadFileComponent formRef={formRef} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
        <Button loading={submitLoading} type="primary" htmlType="submit">
          创建
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProductTab;
