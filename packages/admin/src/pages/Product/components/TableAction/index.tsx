import React, { FC, useState } from 'react';
import { Divider, Space, Typography, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { TableActionProps } from '@src/pages/Product/components/TableAction/interfacet';
import ProductDetailModal from '@src/pages/Product/components/ProductDetailModal';

const { confirm } = Modal;

const TableAction: FC<TableActionProps> = props => {
  const { record } = props;
  const [visible, setVisible] = useState(false);

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
    <>
      <Space size="middle" split={<Divider type="vertical" />}>
        <Typography.Link>
          <Button onClick={() => setVisible(true)} type="primary" size="small">
            详情
          </Button>
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

      <ProductDetailModal record={record} visible={visible} setVisible={setVisible} />
    </>
  );
};

export default TableAction;
