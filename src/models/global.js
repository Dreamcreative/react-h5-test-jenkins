import { stringify } from 'querystring';
import { router } from 'umi';
import { Toast } from 'antd-mobile';
import { requestByPost, requestByGet } from '@/service/service';
import { getPageQuery } from '@/utils/utils';

const globalModel = {
  namespace: 'global',
  state: {
    isRegeister: localStorage.getItem('xinceH5618Regeister'),
  },
  effects: {
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default globalModel;
