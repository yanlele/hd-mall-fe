import { Modal } from 'antd';

const deleteItemHelper = (addressItem: any) => {
  Modal.confirm({
    title: '确认删除改地址？',
    onOk: () => {
      console.log(addressItem);
    },
  });
};

export default deleteItemHelper;
