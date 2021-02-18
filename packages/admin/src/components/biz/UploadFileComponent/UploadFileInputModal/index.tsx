import React, { FC } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadFileInputModalProps } from '@src/components/biz/UploadFileComponent/UploadFileInputModal/interface';
import { get, map, split, compact } from 'lodash';

import styles from './style.less';

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
  const { visible, setVisible, value, onChange, multiple = false } = props;
  const handleOnFinish = (value: any) => {
    // 保存成功
    const list = map(value.image_link, item => {
      const tempArr = split(item, '/');
      const fileName = get(tempArr, tempArr.length - 1, '');
      return {
        uid: '-1',
        status: 'done',
        url: item,
        fileName,
        type: '',
        name: fileName,
      };
    });

    onChange(compact(list));
    // 关闭模态框
    setVisible(false);
  };

  return (
    <Modal
      className={styles.uploadFileInputModalContainer}
      destroyOnClose
      title="url上传文件"
      centered
      visible={visible}
      footer={null}
      width={'640px'}
      onCancel={() => setVisible(false)}>
      <Form onFinish={handleOnFinish} name="dynamic_form_item" {...formItemLayoutWithOutLabel}>
        <Form.List name="image_link" initialValue={map(value, item => get(item, 'url', ''))}>
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
                          message: '请输入url链接',
                        },
                      ]}
                      noStyle>
                      <Input placeholder="请输入url链接" style={{ width: '90%' }} />
                    </Form.Item>
                    {fields.length >= 1 ? (
                      <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    disabled={!multiple ? fields.length >= 1 : false}
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: '90%' }}
                    icon={<PlusOutlined />}>
                    添加 field
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            );
          }}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            确认
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UploadFileInputModal;
