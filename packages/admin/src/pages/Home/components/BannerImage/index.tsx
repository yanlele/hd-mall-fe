import React, { FC } from 'react';
import { Button, Divider, List, Space } from 'antd';
import { usePersistFn, useRequest } from 'ahooks';
import { getBannerListRequest } from '@src/pages/Home/service';
import { get } from 'lodash';
import { BannerItem } from '@src/pages/Home/service/interface';
import { useSetRecoilState } from 'recoil';
import { bannerModalModel } from '@src/pages/Home/model';
import { BannerModalType } from '@src/pages/Home/consts';
import produce from 'immer';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const BannerImage: FC = () => {
  const { data: res } = useRequest(getBannerListRequest);

  const setBannerModalState = useSetRecoilState(bannerModalModel);

  const bannerList: BannerItem[] = get(res, 'data', []);
  console.log('bannerList', bannerList);

  const handleAdd = usePersistFn(() => {
    setBannerModalState(
      produce(draft => {
        draft.visible = true;
        draft.type = BannerModalType.add;
      }),
    );
  });

  return (
    <>
      <Space style={{ marginBottom: '6px' }} size="small">
        <Button type="primary" onClick={handleAdd}>
          添加
        </Button>
        <Button>预览</Button>
      </Space>

      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <p>{item}</p>
            <Space split={<Divider type="vertical" />}>
              <Button size="small">修改 </Button>
            </Space>
          </List.Item>
        )}
      />
    </>
  );
};

export default BannerImage;
