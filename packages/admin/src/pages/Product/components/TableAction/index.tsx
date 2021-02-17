import React, { FC } from 'react';
import { Divider, Space, Typography, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { TableActionProps } from '@src/pages/Product/components/TableAction/interfacet';

const { confirm } = Modal;

const TableAction: FC<TableActionProps> = props => {
  const { record } = props;

  // 删除确认模态框
  const handleShowDeleteConfirm = () => {
    confirm({
      title: '确认删除该商品数据?',
      icon: <ExclamationCircleOutlined />,
      content: '删除之后无法恢复。',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
    });
  };

  return (
    <Space size="middle" split={<Divider type="vertical" />}>
      <Typography.Link>
        <a>Invite {record.name}</a>
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
