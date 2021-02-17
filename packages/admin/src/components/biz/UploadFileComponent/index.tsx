import React, { FC, useState } from 'react';
import { Upload, Button } from 'antd';
import { get, map, compact, isBoolean } from 'lodash';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';
import { ApiPrefix } from '@src/common/consts';
import { UploadFileComponentProps } from '@src/components/biz/UploadFileComponent/interface';

const UploadFileComponent: FC<UploadFileComponentProps> = props => {
  const { onChange, multiple } = props;

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
    multiple: isBoolean(multiple) ? multiple : false,
  };

  return (
    <Upload {...uploadProps} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadFileComponent;
