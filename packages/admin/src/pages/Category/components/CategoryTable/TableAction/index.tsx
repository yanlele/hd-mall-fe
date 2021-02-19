import React, { FC } from 'react';
import { Button, Divider, Space, Typography, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { CategoryTableAction } from '@src/pages/Category/components/CategoryTable/TableAction/interface';
import { useRecoilState } from 'recoil';
import { categoryListModel } from '@src/pages/Category/models';
import { handleGetCategoryListAsyncHelper } from '@src/pages/Category/helper';
import { deleteCategoryRequest } from '@src/pages/Category/service';

const { confirm } = Modal;

const TableAction: FC<CategoryTableAction> = props => {
  const { categoryItem } = props;
  const [state, setState] = useRecoilState(categoryListModel);

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
              handleGetCategoryListAsyncHelper({ state, setState });
              resolve();
            })
            .catch(() => reject());
        }).catch(() => console.log('Oops errors!'));
      },
    });
  };

  return (
    <Space size="middle" split={<Divider type="vertical" />}>
      <Typography.Link>
        <Button size="small">添加</Button>
      </Typography.Link>

      <Typography.Link>
        <Button size="small">修改</Button>
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
