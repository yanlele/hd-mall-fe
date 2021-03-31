import React, { FC, useState } from 'react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { map } from 'lodash';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@src/style/swiper-min.css';
import styles from './style.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const list = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201303%2F18%2F233101zl8ouwl8l8e8eu7e.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537403&t=89b82ab1d4c58ee8c656c4d1536fcaef',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3726272358,2619832442&fm=26&gp=0.jpg',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F11%2F130724xpp1t8cduuq8d1u4.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537405&t=b2e69b3d1433b5cffbd9c3b6ea652d67',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F29%2F101838y2tkuxpfopkwzpvg.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537405&t=50d3fcf9889e687aa57d2d6fcd3499b7',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201205%2F15%2F152008d7vjov6j6zdo6o8z.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537406&t=4ae6731dd9ea0ea54e7b0d5968e1cf17',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fsoftbbs%2F1003%2F07%2Fc0%2F3134443_1267900790753_1024x1024soft.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537407&t=6552d09c47d402c7ce826531e86d2945',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201303%2F18%2F233101zl8ouwl8l8e8eu7e.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537403&t=89b82ab1d4c58ee8c656c4d1536fcaef',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201307%2F24%2F213459izmmcsheybh3z6ee.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537404&t=1b8a18fd772414a19d334a4104e437e1',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F11%2F130724xpp1t8cduuq8d1u4.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537405&t=b2e69b3d1433b5cffbd9c3b6ea652d67',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F29%2F101838y2tkuxpfopkwzpvg.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537405&t=50d3fcf9889e687aa57d2d6fcd3499b7',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201205%2F15%2F152008d7vjov6j6zdo6o8z.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537406&t=4ae6731dd9ea0ea54e7b0d5968e1cf17',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fsoftbbs%2F1003%2F07%2Fc0%2F3134443_1267900790753_1024x1024soft.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619537407&t=6552d09c47d402c7ce826531e86d2945',
];

const MainImageContainer: FC = () => {
  // 获取所有分类
  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  const [mainImage, setMainImage] = useState(list[0]);

  return (
    <div className={styles.mainImageContainer}>
      <div className="main-img">
        <img src={mainImage} alt="" />
      </div>
      <div className="img-list">
        <div className="image-prev">
          <LeftCircleOutlined />
        </div>
        <Swiper
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          navigation={{ nextEl: '.image-next', prevEl: '.image-prev' }}
          slidesPerView={5}
          spaceBetween={14}
          slidesPerGroup={5}
          loopFillGroupWithBlank
          onSwiper={swiper => console.log(swiper)}
          onChange={value => console.log('on change value: ', value)}
          className="swiper-wrapper">
          {map(list, (item, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <img onClick={() => setMainImage(item)} width={70} src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="image-next">
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  );
};

export default MainImageContainer;
