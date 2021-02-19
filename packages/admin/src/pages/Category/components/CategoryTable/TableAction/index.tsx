import React, { FC } from 'react';
import { Button, Divider, Modal, Space, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { CategoryTableAction } from '@src/pages/Category/components/CategoryTable/TableAction/interface';
import { useSetRecoilState } from 'recoil';
import { categoryListModelSelector, categoryModalVisibleModelSelector } from '@src/pages/Category/models';
import { handleGetCategoryListAsyncHelper } from '@src/pages/Category/helper';
import { deleteCategoryRequest } from '@src/pages/Category/service';
import { CategoryActionType } from '@src/pages/Category/models/interface';

const { confirm } = Modal;

const TableAction: FC<CategoryTableAction> = props => {
  const { categoryItem } = props;
  const setState = useSetRecoilState(categoryListModelSelector);
  const setModalState = useSetRecoilState(categoryModalVisibleModelSelector);

  // 删除确认模态框
  const handleShowDeleteConfirm = () => {
    const id = categoryItem.id;
    confirm({
      title: '确认删除该商品品类?',
      icon: <ExclamationCircleOutlined />,
      content: '删除之后无法恢复。',
      onOk() {
        return new Promise((resolve, reject) => {
          deleteCategoryRequest({ id })
            .then(async () => {
              handleGetCategoryListAsyncHelper({ setState });
              resolve();
            })
            .catch(() => reject());
        }).catch(() => console.log('Oops errors!'));
      },
    });
  };

  // 添加
  const handleAddCategory = () => setModalState({ visible: true, parentId: categoryItem.id });

  // 编辑
  const handleEditCategory = () => setModalState({ visible: true, type: CategoryActionType.edit, item: categoryItem });

  return (
    <Space size="middle" split={<Divider type="vertical" />}>
      {!categoryItem.parent_id && (
        <Typography.Link>
          <Button onClick={handleAddCategory} type="primary" size="small">
            添加
          </Button>
        </Typography.Link>
      )}

      <Typography.Link>
        <Button size="small" onClick={handleEditCategory}>
          修改
        </Button>
      </Typography.Link>

      <Typography.Link>
        <Button onClick={handleShowDeleteConfirm} danger size="small">
          删除
        </Button>
      </Typography.Link>
    </Space>
  );
};

export default TableAction;
