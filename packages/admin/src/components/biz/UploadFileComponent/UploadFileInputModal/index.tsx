import React, { FC } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadFileInputModalProps } from '@src/components/biz/UploadFileComponent/UploadFileInputModal/interface';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const UploadFileInputModal: FC<UploadFileInputModalProps> = props => {
  const { visible, setVisible } = props;
  return (
    <Modal
      destroyOnClose
      title="url上传文件"
      centered
      visible={visible}
      footer={null}
      width={'640px'}
      onCancel={() => setVisible(false)}>
      <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel}>
        <Form.List
          name="names"
          initialValue={['123123']}
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(new Error('At least 1 passengers'));
                }
              },
            },
          ]}>
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'Passengers' : ''}
                    required={false}
                    key={field.key}>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input passenger's name or delete this field.",
                        },
                      ]}
                      noStyle>
                      <Input placeholder="passenger name" style={{ width: '80%' }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} style={{ width: '80%' }} icon={<PlusOutlined />}>
                    Add field
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            );
          }}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UploadFileInputModal;
