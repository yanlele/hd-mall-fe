import { ColumnsType } from 'antd/lib/table/interface';
import React from 'react';
import { Divider } from 'antd';
import { useSetRecoilState } from 'recoil';
import { usePersistFn } from 'ahooks';
import { produce } from 'immer';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { GetColumnsHelperOptions } from '@src/pages/AdminAddress/components/AdminAddressList/interface';

const getColumnsHelper = (props: GetColumnsHelperOptions): ColumnsType<any> => {
  const { handleDelete } = props;
  const setState = useSetRecoilState(clientAddressModalModel);

  const handleUpdate = usePersistFn((item: any) => {
    setState(
      produce(draft => {
        draft.addressInfo = item;
        draft.type = 'edit';
        draft.visible = true;
        draft.title = '修改';
      }),
    );
  });

  return [
    {
      title: '收货人',
      dataIndex: 'addressee_name',
      key: 'addressee_name',
    },
    {
      title: '电话号码',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '省市区',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: '详情地址',
      dataIndex: 'address_detail',
      key: 'address_detail',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, item) => {
        return (
          <div>
            <a onClick={() => handleDelete(item.id)}>删除</a>
            <Divider type="vertical" />
            <a onClick={() => handleUpdate(item)}>修改</a>
          </div>
        );
      },
    },
  ];
};

export default getColumnsHelper;
