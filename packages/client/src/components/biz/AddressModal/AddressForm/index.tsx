import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { useMount } from 'ahooks';
import produce from 'immer';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const AddressForm: FC = () => {
  const [form] = Form.useForm();
  const [{ addressInfo }, setModalState] = useRecoilState(clientAddressModalModel);

  useMount(() => {
    setModalState(
      produce(draft => {
        draft.actions.onSubmit = form.validateFields;
      }),
    );
  });

  return (
    <Form {...layout} form={form} name="control-hooks">
      <Form.Item
        initialValue={addressInfo.address_name}
        name="address_name"
        label="姓名"
        rules={[{ required: true, message: '请输入姓名' }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>

      <Form.Item
        initialValue={addressInfo.mobile}
        name="mobile"
        label="电话号码"
        rules={[
          {
            required: true,
            validator: (_, value, callback) => {
              if (!/^1\d{10}$/.test(value)) {
                return callback('请输入正确的手机号码');
              }
              return callback();
            },
          },
        ]}>
        <Input placeholder="请输入正确的手机号码" />
      </Form.Item>

      <Form.Item
        initialValue={addressInfo.province}
        name="province"
        label="省市区"
        rules={[
          {
            required: true,
            message: '请输入省市区',
          },
        ]}>
        <Input placeholder="请输入省市区" />
      </Form.Item>

      <Form.Item
        initialValue={addressInfo.address_detail}
        name="address_detail"
        label="地址详情"
        rules={[{ required: true, message: '请填写地址详情， 精确到门牌号' }]}>
        <TextArea autoSize={{ minRows: 3, maxRows: 3 }} placeholder="请填写地址详情， 精确到门牌号" />
      </Form.Item>
    </Form>
  );
};

export default AddressForm;
