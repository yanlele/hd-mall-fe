import React, { FC, useState } from 'react';
import styles from './style.less';
import { CountComponentProps } from '@src/components/dataEntry/CountComponent/interface';
import { usePersistFn } from 'ahooks';

const CountComponent: FC<CountComponentProps> = props => {
  const { value = 1, onChange } = props;
  const [count, setCount] = useState(value);

  const handleAdd = usePersistFn(() => {
    setCount(count + 1);
    onChange(count + 1);
  });

  const handleSubtract = usePersistFn(() => {
    if (count > 1) {
      setCount(count - 1);
      onChange(count - 1);
    }
  });

  return (
    <div className={styles.inputNumberContainer}>
      <input type="number" max={99} value={count} min={1} className="input-number" />
      <div className="input-number-buttons">
        <span className="add" onClick={handleAdd}>
          +
        </span>
        <span className="subtract" onClick={handleSubtract}>
          -
        </span>
      </div>
    </div>
  );
};

export default CountComponent;
