import { createTypes } from 'reduxsauce';

import { AsyncStateInterface } from '../types';

const prefix = 'ISSUES/';

export default createTypes(
  `
  GET_ISSUES
  GET_ISSUES_SUCCESS
  GET_ISSUES_ERROR
  
  LOAD_MORE
  LOAD_MORE_SUCCESS
  LOAD_MORE_ERROR
  
  SET_OWNER
  SET_REPO
  
  RESET
`,
  { prefix },
);

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IssueInterface {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  performed_via_github_app: null;
}

export interface MetaInterface {
  per_page: number;
  page: number;
  state: 'open' | 'closed' | 'all';
  sort: 'created' | 'updated' | 'comments';
  owner?: string;
  repo?: string;
}

export interface InputsInterface {
  owner: string;
  repo: string;
}

export interface IssuesStateInterface {
  data: IssueInterface[];
  api: AsyncStateInterface;
  loadMoreAPI: AsyncStateInterface;
  initialLoad: boolean;
  meta: MetaInterface;
  inputs: InputsInterface;
}
