import { IssuesStateInterface } from '../../../../redux/issues/types';

export interface Props {
  getIssues: (payload: any) => any;
  loadMore: (payload: any) => any;
  reset: () => void;
  issues: IssuesStateInterface;
  owner: string;
  repo: string;
}
