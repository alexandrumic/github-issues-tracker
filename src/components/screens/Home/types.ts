import { IssuesStateInterface } from '../../../redux/issues/types';

export interface Props {
  setOwner: (payload: any) => any;
  issues: IssuesStateInterface;
}
