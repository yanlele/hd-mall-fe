import React, { FC, useEffect, useMemo, useRef } from 'react';
import { Form, FormInstance, Input, message, Modal, Select } from 'antd';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from 'lodash';
import { categoryListModelSelector, categoryModalVisibleModelSelector } from '@src/pages/Category/models';
import { commonFormLayout } from '@src/common/consts';
import UploadFileComponent from '@src/components/biz/UploadFileComponent';
import { CreateCategoryRequestParams } from '@src/pages/Category/service/interface';
import { createCategoryRequest } from '@src/pages/Category/service';
import { handleGetCategoryListAsyncHelper } from '@src/pages/Category/helper';
import { categoryModalVisibleModelDefault } from '@src/pages/Category/models/consts';
import { CategoryActionType } from '@src/pages/Category/models/interface';
import { handleLinkListToFileList } from '@src/components/biz/UploadFileComponent/helper';

const { Option } = Select;

const CategoryModal: FC = () => {
  const [{ visible, modalLoading, type, parentId, item }, setModalState] = useRecoilState(
    categoryModalVisibleModelSelector,
  );
  const setState = useSetRecoilState(categoryListModelSelector);

  const formRef = useRef<FormInstance>();

  useEffect(() => {
    if (type === CategoryActionType.edit && item?.id) {
    }
  });

  const initialValues = useMemo(() => {
    if (type === CategoryActionType.edit && item?.id) {
      const avatar = get(item, 'avatar', '');
      const params: any = { name: item.name };
      if (avatar) params.avatar = handleLinkListToFileList([avatar]);
      params.type = item.type;
      return params;
    }
    return { type: 0 };
  }, [item, type]);

  const handleOnOk = async () => {
    const value = await formRef.current?.validateFields();

    // 整理数据
    const params: CreateCategoryRequestParams = { ...value };
    console.log('params', params);
    if (get(value, 'avatar.0.url', '')) params.avatar = get(value, 'avatar.0.url', '');
    if (parentId) params.parent_id = parentId;

    // 创建
    setModalState({ modalLoading: true });
    await createCategoryRequest(params);
    message.success('创建成功');
    setModalState({ visible: false, modalLoading: false });

    // 刷新列表
    await handleGetCategoryListAsyncHelper({ setState });
  };

  return (
    <Modal
      destroyOnClose
      title={type === CategoryActionType.edit ? '编辑' : '创建'}
      centered
      visible={visible}
      onOk={handleOnOk}
      width={'640px'}
      confirmLoading={modalLoading}
      onCancel={() => setModalState(categoryModalVisibleModelDefault)}>
      <Form
        // @ts-ignore
        ref={formRef}
        {...commonFormLayout}
        name="basic"
        initialValues={initialValues}>
        <Form.Item label="分类名称" name="name" rules={[{ required: true, message: '一定要有分类名称' }]}>
          <Input />
        </Form.Item>

        {!parentId && (
          <Form.Item label="类型" name="type">
            <Select defaultValue={0} style={{ width: 120 }}>
              <Option value={0}>普通分类</Option>
              <Option value={1}>主分类</Option>
            </Select>
          </Form.Item>
        )}

        <Form.Item label="主图" name="avatar">
          <UploadFileComponent />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
