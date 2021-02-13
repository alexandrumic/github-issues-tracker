const getErrorMsg = (res: any) => {
  const { message } = res.data;
  let msg = 'Something went wrong';

  if (typeof message === 'string') {
    msg = message;
  }

  return msg;
};

export { getErrorMsg };
