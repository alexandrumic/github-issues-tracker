import {
  IssuesStateInterface,
  SortType,
  StateType,
} from '../../../../redux/issues/types';

export interface Props {
  getIssues: (payload: any) => any;
  loadMore: (payload: any) => any;
  reset: () => void;
  issues: IssuesStateInterface;
  owner: string;
  repo: string;
  sortFilter: SortType;
  stateFilter: StateType;
  favouritesIssues: number[];
  toggleFavourite: (id: number) => void;
}
