import { AppState } from '../types';
import { IssuesStateInterface, SortType, StateType } from './types';

const getIssuesState = (state: AppState): IssuesStateInterface => state.issues;
const getOwnerValue = (state: AppState): string => state.issues.inputs.owner;
const getRepoValue = (state: AppState): string => state.issues.inputs.repo;
const getStateFilter = (state: AppState): StateType => state.issues.meta.state;
const getSortFilter = (state: AppState): SortType => state.issues.meta.sort;

export {
  getIssuesState,
  getOwnerValue,
  getRepoValue,
  getStateFilter,
  getSortFilter,
};
