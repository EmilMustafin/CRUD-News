import { FC } from 'react';
import { Icons } from '@/shared/assets';
import styles from './spinner.module.css';
import { Icon } from '../icon';

interface ISpinner {
  width?: string;
  height?: string;
}

export const Spinner: FC<ISpinner> = ({ width = '50px', height = '50px' }) => {
  return (
    <div className={styles.spinnerContainer}>
      <Icon icon={Icons.SPINNER} width={width} height={height} />
    </div>
  );
};
