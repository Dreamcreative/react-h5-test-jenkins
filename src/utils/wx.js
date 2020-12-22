import requestByGet from '../service/service.js';
import wx from 'weixin-js-sdk';
import request from '@/utils/request';
import { getQueryStr, href } from '@/utils/utils';

export async function initWxShare(title, desc, link, imgUrl, success) {
  let url = window.location.href.split('#')[0];
  let requestUrl = '/usercenter/wechat/getTicket';
  const newUrl = getQueryStr(`${href}${requestUrl}`, { url: url });
  // url = 'https://daily.xinc818.com/invite-friends';
  request(newUrl, {
    method: 'GET',
  }).then((resp) => {
    if (resp.status && resp.entry) {
      wx.config({
        beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端aert出来
        appId: 'wxda5aca54cfc56d20', // 必填，企业微信的corpID
        timestamp: resp.entry.timestamp, // 必填，生成签名的时间戳
        nonceStr: resp.entry.noncestr, // 必填，生成签名的随机串 必填，生成签名的随机串
        signature: resp.entry.sign, // 必填，签名
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo'],
      });
      console.log(1111);
      wxShare(title, desc, link, imgUrl, success);
    } else {
      // Toast.info(resp.message, 2);
    }
  });
}

function wxShare(title, desc, link, imgUrl, success) {
  wx.ready(() => {
    // 朋友圈
    wx.onMenuShareTimeline({
      title, //  分享标题
      link, //  分享链接
      imgUrl, //  分享图标
      success,
    });
    // 分享给朋友
    wx.onMenuShareAppMessage({
      title, //  分享标题
      desc, //  分享描述
      link, //  分享链接
      imgUrl, //  分享图标
      success,
    });
    // QQ
    wx.onMenuShareQQ({
      title, //  分享标题
      desc, //  分享描述
      link, //  分享链接
      imgUrl, //  分享图标
      success,
    });
    // 腾讯微博
    wx.onMenuShareWeibo({
      title, //  分享标题
      desc, //  分享描述
      link, //  分享链接
      imgUrl, //  分享图标
      success,
    });
    // QQ空间
    wx.onMenuShareQZone({
      title, //  分享标题
      desc, //  分享描述
      link, //  分享链接
      imgUrl, //  分享图标
      success,
    });
  });
}

// 获取签名接口
