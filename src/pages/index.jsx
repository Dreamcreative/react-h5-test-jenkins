import React from 'react';
import {Button, NavBar, Icon} from 'antd-mobile';
import { Link } from 'umi';
import styles from './index.less';
import request from '@/utils/request';


export default class Index extends React.Component {

    state = {
        oldValue: {}
    };

     componentDidMount() {
        const data = this.getData();
        data.then((resp) => {
            // console.log(resp, 'jjj')
        });
    }

    async getData(){
        return await request('/api/test/result', {
            headers: { 'Content-Type': 'multipart/form-data;' },
            method: 'POST',
        })
    }
    render () {
        return (
            <div className={styles.normal}>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{'首页'}</NavBar>
                <div className={styles.welcome} />
                <ul className={styles.list}>
                    <li><Link to="/promotion?activityCode=63f28e444e38469890dedef50b507531">前往活动宣传页</Link></li>
                    <li><Link to="/register?activityCode=63f28e444e38469890dedef50b507531">前往报名页</Link></li>
                    <li><Link to="/userAgreement?activityCode=63f28e444e38469890dedef50b507531">前往用户协议</Link></li>
                    <li><Link to="/login?activityCode=63f28e444e38469890dedef50b507531">前往登录页面</Link></li>
                    <li><Link to="/invite?activityCode=63f28e444e38469890dedef50b507531">前往我的邀请页面</Link></li>
                    <li><Link to="/withDraw?activityCode=63f28e444e38469890dedef50b507531">前往提现页面</Link></li>
                </ul>
            </div>
        );
    }
}
