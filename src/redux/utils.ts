import { AsyncStateInterface } from './types';

function actionCreator(type: string = '') {
  return (payload: any = {}) => ({
    type,
    payload,
  });
}

function asyncActionCreator(
  pending: string = '',
  success: string = '',
  error: string = '',
) {
  return {
    pending: actionCreator(pending),
    success: actionCreator(success),
    error: actionCreator(error),
  };
}

function getInitialState(): AsyncStateInterface {
  return {
    pending: false,
    error: false,
    success: false,
  };
}

function apiStateCreator(newState: any = {}) {
  return {
    ...getInitialState(),
    ...newState,
  };
}

export { actionCreator, asyncActionCreator, apiStateCreator };
