import API from './services';
import { getErrorMsg } from './utils';

import {
  MetaInterface,
  IssueDetailsMetaInterface,
} from '../redux/issues/types';

const get = async (meta: MetaInterface): Promise<any> => {
  const { owner, repo, per_page, page, state, sort } = meta;
  const res = await API.get(
    `/repos/${owner}/${repo}/issues?state=${state}&sort=${sort}&per_page=${per_page}&page=${page}`,
  );

  if (!res.ok) {
    throw new Error(getErrorMsg(res));
  }

  return {
    meta: {
      per_page,
      page: page + 1,
      owner,
      repo,
      state,
      sort,
    },
    data: res.data || [],
  };
};

const getIssue = async (meta: IssueDetailsMetaInterface): Promise<any> => {
  const { owner, repo, issueNumber } = meta;
  const res = await API.get(`/repos/${owner}/${repo}/issues/${issueNumber}`);

  if (!res.ok) {
    throw new Error(getErrorMsg(res));
  }

  return res.data;
};

export default {
  get,
  getIssue,
};
