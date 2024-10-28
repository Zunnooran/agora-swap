import { useTheme } from 'theme/theme-context';

import Container from 'components/core-ui/container/container';

import BGImageLight from 'assets/images/bg-hero-light.png';
import BgImage from 'assets/images/bgHero.png';

interface IProps {
  children: React.ReactNode;
}

function BackgroundWrapper({ children }: IProps) {
  const { theme } = useTheme();
  return (
    <div className='relative flex justify-center'>
      <img
        src={theme === 'dark' ? BgImage : BGImageLight}
        className='md:block hidden absolute h-[15%] w-full -mt-[135px] -z-10 max-w-screen-3xl'
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      />
      <Container>{children}</Container>
    </div>
  );
}

export default BackgroundWrapper;
