import SpriteIcons from '../../assets/icons/sprite.svg';
import { WrapLogo } from './Header.styled';
export const Header = () => {
  return (
    <div>
      <WrapLogo>
        <svg width={42} height={17}>
          <use xlinkHref={`${SpriteIcons}#logo`} />
        </svg>
      </WrapLogo>
    </div>
  );
};
