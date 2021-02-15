import { AppState } from '../types';
import { IssuesStateInterface } from './types';

const getIssuesState = (state: AppState): IssuesStateInterface => state.issues;
const getOwnerValue = (state: AppState): string => state.issues.inputs.owner;
const getRepoValue = (state: AppState): string => state.issues.inputs.repo;

export { getIssuesState, getOwnerValue, getRepoValue };
