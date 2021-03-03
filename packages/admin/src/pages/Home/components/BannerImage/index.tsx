import React, { FC } from 'react';
import { Button, Divider, List, Space } from 'antd';
import { useMount, usePersistFn } from 'ahooks';
import { BannerItem } from '@src/pages/Home/service/interface';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bannerListModel, bannerModalModel } from '@src/pages/Home/model';
import { BannerModalType } from '@src/pages/Home/consts';
import produce from 'immer';
import { handleGetBannerList } from '@src/pages/Home/service/helper';

const BannerImage: FC = () => {
  const setBannerModalState = useSetRecoilState(bannerModalModel);

  const [{ list: bannerList, loading }, setBannerListState] = useRecoilState(bannerListModel);

  useMount(() => {
    handleGetBannerList({ setState: setBannerListState });
  });

  const handleAdd = usePersistFn(() => {
    setBannerModalState(
      produce(draft => {
        draft.visible = true;
        draft.type = BannerModalType.add;
      }),
    );
  });

  const handleEdit = usePersistFn((item: BannerItem) => {
    setBannerModalState(
      produce(draft => {
        draft.visible = true;
        draft.type = BannerModalType.edit;
        draft.item = item;
      }),
    );
  });

  return (
    <>
      <Space style={{ marginBottom: '6px' }} size="small">
        <Button type="primary" onClick={handleAdd}>
          添加
        </Button>
      </Space>

      <List
        bordered
        loading={loading}
        dataSource={bannerList}
        renderItem={item => (
          <List.Item>
            <p>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={item.url} target="_blank">
                {item.file_name}
              </a>
            </p>
            <Space split={<Divider type="vertical" />}>
              <Button size="small" onClick={() => handleEdit(item)}>
                修改
              </Button>
              <Button danger size="small">
                删除
              </Button>
            </Space>
          </List.Item>
        )}
      />
    </>
  );
};

export default BannerImage;
