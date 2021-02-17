import { AppState } from '../types';
import {
  IssuesStateInterface,
  IssueInterface,
  SortType,
  StateType,
} from './types';

const getIssuesState = (state: AppState): IssuesStateInterface => state.issues;
const getOwnerValue = (state: AppState): string => state.issues.inputs.owner;
const getRepoValue = (state: AppState): string => state.issues.inputs.repo;
const getStateFilter = (state: AppState): StateType => state.issues.meta.state;
const getSortFilter = (state: AppState): SortType => state.issues.meta.sort;
const getFavouritesIssuesIDs = (state: AppState): number[] =>
  state.issues.favourites;
const getFavouritesIssuesList = (state: AppState): IssueInterface[] =>
  state.issues.data.filter((issue) =>
    state.issues.favourites.includes(issue.id),
  );

export {
  getIssuesState,
  getOwnerValue,
  getRepoValue,
  getStateFilter,
  getSortFilter,
  getFavouritesIssuesIDs,
  getFavouritesIssuesList,
};
