import { IssuesStateInterface, MetaInterface } from './issues/types';

export interface AppState {
  issues: IssuesStateInterface;
}

export interface AsyncStateInterface {
  pending: boolean;
  error: boolean;
  success: boolean;
}

export interface ActionInterface {
  type: string;
  payload: any;
}

export interface GetIssuesPayloadInterface {
  type: string;
  payload: MetaInterface;
}
