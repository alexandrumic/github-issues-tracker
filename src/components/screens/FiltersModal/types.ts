import { StateType, SortType } from '../../../redux/issues/types';

export interface Props {
  setSortFilter: (payload: any) => any;
  setStateFilter: (payload: any) => any;
  getIssues: (payload: any) => any;
  sortFilter: SortType;
  stateFilter: StateType;
  owner: string;
  repo: string;
}
