import API from './services';
import { getErrorMsg } from './utils';

const get = async (owner: string, repo: string): Promise<any> => {
  const res = await API.get(`/repos/${owner}/${repo}/issues`);

  if (!res.ok) {
    throw new Error(getErrorMsg(res));
  }

  return res.data || null;
};

export default {
  get,
};
