import { toString, toNumber } from 'lodash';

export const handleCountTimeHelper = (endDate: Date) => {
  //获取当前时间
  const date = new Date();
  const now = date.getTime();
  //设置截止时间
  // const str = '2017/5/17 00:00:00';
  // const endDate = new Date(time);
  const end = endDate.getTime();

  //时间差
  const leftTime = end - now;
  //定义变量 d,h,m,s保存倒计时的时间
  let d, h, m, s;
  if (leftTime >= 0) {
    d =
      Math.floor(leftTime / 1000 / 60 / 60 / 24) > 10
        ? Math.floor(leftTime / 1000 / 60 / 60 / 24)
        : `0${Math.floor(leftTime / 1000 / 60 / 60 / 24)}`;
    h =
      Math.floor((leftTime / 1000 / 60 / 60) % 24) > 10
        ? Math.floor((leftTime / 1000 / 60 / 60) % 24)
        : `0${Math.floor((leftTime / 1000 / 60 / 60) % 24)}`;
    m =
      Math.floor((leftTime / 1000 / 60) % 60) > 10
        ? Math.floor((leftTime / 1000 / 60) % 60)
        : `0${Math.floor((leftTime / 1000 / 60) % 60)}`;
    s =
      Math.floor((leftTime / 1000) % 60) > 10
        ? Math.floor((leftTime / 1000) % 60)
        : `0${Math.floor((leftTime / 1000) % 60)}`;
  }
  //将倒计时赋值到div中
  const $d = document.getElementById('_d');
  const $h = document.getElementById('_h');
  const $m = document.getElementById('_m');
  const $s = document.getElementById('_s');

  // 天数的元素节点不存在
  if (!$d) {
    h = toNumber(h) + toNumber(d) * 24;
    h = h > 10 ? h : `0${h}`;
  }

  if ($d) $d.innerText = toString(d);
  if ($h) $h.innerText = toString(h);
  if ($m) $m.innerText = toString(m);
  if ($s) $s.innerText = toString(s);
};
