import i18n from '@i18n/i18n';
import { get } from '@utils/util';

export function handleApiResponse(res: IResponseAPI<any>) {
  if (res.error || res.result === undefined || !res.success) {
    const newError = get(res, 'error');
    let error: any = get(
      newError,
      'message',
      i18n.translate('ERROR.ERROR_UNDEFINED')
    );
    return {
      error: error.toString(),
      data: [],
    };
  }
  return {
    data: res.result,
    error: undefined,
  };
}

export const handleApiResolve = async (func: Promise<IResponseAPI<any>>) => {
  try {
    const res: IResponseAPI<any> = await func;
    return handleApiResponse(res);
  } catch (err: any) {
    return { error: err.toString(), data: undefined };
  }
};
