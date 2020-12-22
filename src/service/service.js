import request from '@/utils/request';
import { getQueryStr, href, getPageQuery } from '@/utils/utils';

export async function requestByPost(url, params) {
  return request(`${href}${url}`, {
    method: 'POST',
    data: params,
  });
}

export async function requestByGet(url, params) {
  return request(getQueryStr(`${href}${url}`, params), {
    method: 'GET',
  });
}
