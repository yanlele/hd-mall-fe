import { get } from 'lodash';
import { map } from 'lodash';

//	type int
//		1 - 商品图
//		2 - 商品详情图
// 		3 - banner 主图
//		4 - banner 附图
export const handleCreateDataHelper = (value: any) => {
  value.primary_image = get(value, 'primary_image.0.url', '');
  value.product_image_list = map(value.product_image_list, item => ({
    file_name: item.fileName,
    url: item.url,
    type: 1,
  }));

  value.product_detail_image_list = map(value.product_detail_image_list, item => ({
    file_name: item.fileName,
    url: item.url,
    type: 2,
  }));

  value.params = JSON.stringify(value.params);
  return value;
};
