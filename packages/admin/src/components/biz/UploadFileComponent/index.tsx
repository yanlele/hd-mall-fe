import React, { FC, useState } from 'react';
import { Upload, Button, Space } from 'antd';
import { get, isBoolean } from 'lodash';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFileComponentProps } from '@src/components/biz/UploadFileComponent/interface';
import UploadFileInputModal from '@src/components/biz/UploadFileComponent/UploadFileInputModal';
import styles from './style.less';
import { ApiPrefix } from '@src/common/consts';

const UploadFileComponent: FC<UploadFileComponentProps> = props => {
  const { onChange, multiple, value = [] } = props;

  const isMultiple = isBoolean(multiple) ? multiple : false;

  const [visible, setVisible] = useState(false);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];

    fileList = fileList.map(file => {
      if (file.response) {
        file.url = get(file, 'response.download_url', '') || get(file, 'response.url', '');
        file.fileName = get(file, 'name');
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
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    action: `${ApiPrefix}/upload`,
    onChange: handleChange,
    multiple: isMultiple,
  };

  const uploadDisabled = !isMultiple ? value.length >= 1 : false;

  return (
    <div className={styles.uploadFileComponentContainer}>
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
        multiple={isMultiple}
        value={value}
        onChange={onChange}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};

export default UploadFileComponent;
