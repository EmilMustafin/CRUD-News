import CheckBoxActive from '../common/checkbox-active.svg';
import CheckBox from '../common/checkbox.svg';
import Cross from '../common/cross.svg';
import Spinner from '../common/spinner.svg';
export enum Icons {
  SPINNER = 'SPINNER',
  CHECKBOX = 'CHECKBOX',
  CHECKBOX_ACTIVE = 'CHECKBOX_ACTIVE',
  CROSS = 'CROSS',
}

export const ICONS: Record<Icons, SVGIcon> = {
  [Icons.CROSS]: Cross,
  [Icons.SPINNER]: Spinner,
  [Icons.CHECKBOX]: CheckBox,
  [Icons.CHECKBOX_ACTIVE]: CheckBoxActive,
};
