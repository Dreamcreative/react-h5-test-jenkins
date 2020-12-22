import React from 'react';
import NProgress from 'nprogress';
import { connect } from 'dva';
import { ConnectState } from './../models/connect';
import './nprogress.less';
import styles from './index.less';
NProgress.configure({ showSpinner: false });

let currHref = '';

export interface IBasicLayout {
  loading: any;
  [key: string]: any;
}
const BasicLayout: React.FC<IBasicLayout> = (props) => {
  const {
    children,
    loading,
    location: { pathname = '/' },
    route: { routes },
  } = props;
  const isLogin = localStorage.getItem('token');
  const { href } = window.location; // 浏览器地址栏中地址
  routes.forEach((item, i) => {
    if (item.path === pathname && item.requireAuth) {
      if (!isLogin) {
        NProgress.start(); // 页面开始加载时调用 start 方法
        NProgress.done(); // 页面请求完毕时调用 done 方法
        currHref = href; // 将新页面的 href 值赋值给 currHref
        return;
      }
    }
  });
  if (currHref !== href) {
    // currHref 和 href 不一致时说明进行了页面跳转
    NProgress.start(); // 页面开始加载时调用 start 方法
    if (!loading.global) {
      // loading.global 为 false 时表示加载完毕
      NProgress.done(); // 页面请求完毕时调用 done 方法
      currHref = href; // 将新页面的 href 值赋值给 currHref
    }
  }

  return (
    <div key={pathname} className={styles.path}>
      <div className={styles.normal}>{children}</div>
    </div>
  );
};

export default connect(({ loading }: ConnectState) => ({
  loading,
}))(BasicLayout);
