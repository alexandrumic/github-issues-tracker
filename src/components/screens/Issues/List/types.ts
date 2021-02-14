import { IssuesStateInterface } from '../../../../redux/issues/types';

export interface Props {
  getIssues: (payload: any) => any;
  loadMore: (payload: any) => any;
  issues: IssuesStateInterface;
}
