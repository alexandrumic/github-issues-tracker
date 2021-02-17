import { IssueInterface } from '../../../redux/issues/types';
import { AsyncStateInterface } from '../../../redux/types';

export interface Props {
  getIssueDetails: (payload: any) => any;
  resetIssue: () => any;
  API: AsyncStateInterface;
  issue: IssueInterface | any;
  owner: string;
  repo: string;
  issueNumber: number;
}
