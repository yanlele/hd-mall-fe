import React, { FC, useEffect, useMemo, useRef } from 'react';
import { Form, FormInstance, Input, message, Modal, Select } from 'antd';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from 'lodash';
import { categoryListModelSelector, categoryModalVisibleModelSelector } from '@src/pages/Category/models';
import { commonFormLayout } from '@src/common/consts';
import UploadFileComponent from '@src/components/biz/UploadFileComponent';
import { CreateCategoryRequestParams } from '@src/pages/Category/service/interface';
import { createCategoryRequest, updateCategoryRequest } from '@src/pages/Category/service';
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
      // 编辑状态下的回填
      console.log('item', item);
      const avatar = get(item, 'avatar', '');
      const banner_image = get(item, 'banner_image', '');
      const params: any = { ...item };
      if (avatar) params.avatar = handleLinkListToFileList([avatar]);
      console.log('banner_image', banner_image);
      if (banner_image) params.banner_image = handleLinkListToFileList([banner_image]);
      return params;
    }
    return { type: 1 };
  }, [item, type]);

  /* 提交 */
  const handleOnOk = async () => {
    const value = await formRef.current?.validateFields();

    // 整理数据
    const params: CreateCategoryRequestParams = { ...value };
    if (get(value, 'avatar.0.url', '')) params.avatar = get(value, 'avatar.0.url', '');
    if (get(value, 'banner_image.0.url', '')) params.banner_image = get(value, 'banner_image.0.url', '');
    if (parentId) params.parent_id = parentId;

    // 创建
    setModalState({ modalLoading: true });

    if (type === CategoryActionType.edit) {
      params.id = item?.id;
      await updateCategoryRequest(params);
      message.success('更新成功');
    } else {
      await createCategoryRequest(params);
      message.success('创建成功');
    }

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

        <Form.Item label="缩略图" name="avatar">
          <UploadFileComponent />
        </Form.Item>

        {!parentId && (
          <>
            <Form.Item label="类型" name="type">
              <Select defaultValue={1} style={{ width: 120 }}>
                <Option value={1}>普通分类</Option>
                <Option value={2}>主分类</Option>
              </Select>
            </Form.Item>

            <Form.Item label="banner" name="banner_image">
              <UploadFileComponent />
            </Form.Item>

            <Form.Item label="banner_link" name="banner_link">
              <Input />
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default CategoryModal;
