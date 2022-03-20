import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import SvgIcon, { Icons } from '../../Icons';
import RenderIf from 'components/RenderIf';
import tabsetContext from '../context';
import { Label, Mark, StyledTab } from './styled';

interface Props {
  name: string;
  icon?: Icons | ReactNode;
  label?: string;
  onClick?: (activeTab: string) => void;
}

const springAnimation = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const emptyAction = () => undefined;

const Item: FunctionComponent<Props> = (props) => {
  const { name, label, icon, onClick } = props;
  const {
    activeTab,
    onTabChange,
    fullWidth,
    disableFocus,
  } = useContext(tabsetContext);

  const handleClick = useCallback(() => {
    let action: any = emptyAction;

    if (onTabChange) {
      action = onTabChange;
    }

    if (onClick) {
      action = onClick
    }

    action(name);
  }, [onTabChange, name]);

  const isSelected = name === activeTab;
  const iconComponent = useMemo(() => {
    if (typeof icon === 'string') {
      return (
        <SvgIcon icon={icon as Icons} />
      );
    }

    return icon;
  }, [icon, disableFocus]);

  return (
    <StyledTab
      role="button"
      data-el="tab"
      tabIndex={0}
      fullWidth={fullWidth}
      selected={isSelected}
      disableFocus={disableFocus}
      onClick={handleClick}
    >
      <RenderIf condition={!!icon}>
        {iconComponent}
      </RenderIf>
      <RenderIf condition={!!label}>
        <Label isSelected={isSelected} spaced={!!icon}>
          {label}
        </Label>
      </RenderIf>
      <RenderIf condition={isSelected}>
        <Mark
          layoutId="tabMarker"
          initial={false}
          transition={springAnimation}
        />
      </RenderIf>
    </StyledTab>
  );
};

Item.defaultProps = {
  icon: null,
  label: '',
};

export default Item;
