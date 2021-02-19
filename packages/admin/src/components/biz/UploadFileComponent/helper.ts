import { get, map, split } from 'lodash';

/**
 * url数组转为文件列表
 * @param list
 */
export const handleLinkListToFileList = (list: string[]) => {
  return map(list, item => {
    const tempArr = split(item, '/');
    const fileName = get(tempArr, tempArr.length - 1, '');
    return {
      uid: '-1',
      status: 'done',
      url: item,
      fileName,
      type: '',
      name: fileName,
    };
  });
};
