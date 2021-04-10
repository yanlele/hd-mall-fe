import { forEach, isEmpty } from 'lodash';
import produce from 'immer';
import { HandleOpenAddressModalHelperOptions } from '@src/pages/Order/components/OrderAddress/interface';

export const handleOpenAddressModalHelper = (options: HandleOpenAddressModalHelperOptions) => {
  const { params, setModalState } = options;
  if (!isEmpty(params)) {
    return setModalState(
      produce(draft => {
        draft.visible = true;
        forEach(Object.entries(params as any), ([key, value]) => {
          // @ts-ignore
          draft[key] = value;
        });
      }),
    );
  }

  return setModalState(
    produce(draft => {
      draft.visible = true;
    }),
  );
};
