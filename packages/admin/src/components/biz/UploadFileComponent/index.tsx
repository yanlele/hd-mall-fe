import React, { FC, useState } from 'react';
import { Upload, Button, Space } from 'antd';
import { get, map, compact, isBoolean } from 'lodash';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';
import { ApiPrefix } from '@src/common/consts';
import { UploadFileComponentProps } from '@src/components/biz/UploadFileComponent/interface';
import UploadFileInputModal from '@src/components/biz/UploadFileComponent/UploadFileInputModal';

const UploadFileComponent: FC<UploadFileComponentProps> = props => {
  const { onChange, multiple } = props;

  const isMultiple = isBoolean(multiple) ? multiple : false;

  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   name: 'string', // 展示的name
    //   fileName: '123',
    //   status: 'done',
    //   uid: '',
    //   size: 0,
    //   url:
    //     'https://gitee.com/yanle-static/static/raw/master/hd-mall/1613566965316-b12117553ac45c2e9ce34ee21fa3981b.jpeg',
    //   type: '',
    // },
  ]);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];

    fileList = fileList.map(file => {
      if (file.response) {
        file.url = get(file, 'response.download_url', '');
        file.name = get(file, 'response.file_name', '');
      }
      return file;
    });

    // 保存给
    onChange(compact(map(fileList, item => item.url)));

    setFileList(fileList);
  };

  const uploadProps = {
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    action: `${ApiPrefix}/upload`,
    onChange: handleChange,
    multiple: isMultiple,
  };

  return (
    <>
      <Space size="small">
        <Upload {...uploadProps} fileList={fileList}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>

        <Button onClick={() => setVisible(true)}>直接通过 URL 链接上传文件</Button>

        <UploadFileInputModal visible={visible} setVisible={setVisible} />
      </Space>
    </>
  );
};

export default UploadFileComponent;
