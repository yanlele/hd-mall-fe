import React, { FC, useState } from 'react';
import { Upload, Button, Space } from 'antd';
import { get, isBoolean } from 'lodash';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFileComponentProps } from '@src/components/biz/UploadFileComponent/interface';
import UploadFileInputModal from '@src/components/biz/UploadFileComponent/UploadFileInputModal';

const UploadFileComponent: FC<UploadFileComponentProps> = props => {
  const { onChange, multiple, value = [] } = props;

  const isMultiple = isBoolean(multiple) ? multiple : false;

  const [visible, setVisible] = useState(false);
  // const [fileList, setFileList] = useState<UploadFile[]>([
  //   {
  //     name:
  //       'https://gitee.com/yanle-static/static/raw/master/hd-mall/1613566965316-b12117553ac45c2e9ce34ee21fa3981b.jpeg', // 展示的name
  //     fileName: '123',
  //     status: 'done',
  //     uid: '',
  //     size: 0,
  //     url:
  //       'https://gitee.com/yanle-static/static/raw/master/hd-mall/1613566965316-b12117553ac45c2e9ce34ee21fa3981b.jpeg',
  //     type: '',
  //   },
  // ]);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];

    fileList = fileList.map(file => {
      if (file.response) {
        file.url = get(file, 'response.download_url', '') || get(file, 'response.url', '');
      }
      // 特殊标记为
      file.uploadType = 'fileUploader';
      return file;
    });

    onChange(fileList);

    // 保存给
    // onChange(compact(map(fileList, item => item.url)));
  };

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    // action: `${ApiPrefix}/upload`,
    onChange: handleChange,
    multiple: isMultiple,
  };

  const uploadDisabled = !isMultiple ? value.length >= 1 : false;

  return (
    <>
      <Space size="small" align="start" direction={'vertical'}>
        <Button onClick={() => setVisible(true)}>
          直接通过 URL 链接上传文件
          {get(value, 'length', 0) >= 1 ? `（${get(value, 'length', 0)}）` : null}
        </Button>
        <Upload {...uploadProps} fileList={value}>
          <Button disabled={uploadDisabled} icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </Space>

      <UploadFileInputModal
        multiple={false}
        value={value}
        onChange={onChange}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default UploadFileComponent;
