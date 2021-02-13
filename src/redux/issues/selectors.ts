import { AppState } from '../types';
import { IssuesStateInterface } from './types';

const getIssuesState = (state: AppState): IssuesStateInterface => state.issues;

export { getIssuesState };
