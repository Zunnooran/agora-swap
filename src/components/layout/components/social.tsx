import { Link } from 'react-router-dom';

import { useTheme } from 'theme/theme-context';

// import DiscordLightIcon from 'assets/icons/discord-icon-light.svg?react';
import MediumIcon from 'assets/icons/bi_medium.svg?react';
// import DiscordIconDark from 'assets/icons/discordLogo-dark.svg?react';
import InstagramIconDark from 'assets/icons/insLogo-dark.svg?react';
import InstagramLightIcon from 'assets/icons/intstaicon-light.svg?react';
import MediumIconDark from 'assets/icons/medium-dark4.svg?react';
import TelegramIconDark from 'assets/icons/telegram-dark.svg?react';
import TelegramIcon from 'assets/icons/telegram.svg?react';
import TwitterIcon from 'assets/icons/twitter.svg?react';
import XIconDark from 'assets/icons/xLogo-dark.svg?react';

// import YtIcon from 'assets/icons/youTube.svg?react';
// import YtIconDark from 'assets/icons/ytLogo-dark.svg?react';

const icons = [
  {
    iconDark: TelegramIconDark,
    iconLight: TelegramIcon,
    link: 'https://t.me/AgoraProtocol',
  },
  {
    iconDark: TelegramIconDark,
    iconLight: TelegramIcon,
    link: 'https://t.me/Agorachatroom',
  },
  {
    iconDark: XIconDark,
    iconLight: TwitterIcon,
    link: 'https://x.com/AGORA_SWAP',
  },
  {
    iconDark: InstagramIconDark,
    iconLight: InstagramLightIcon,
    link: 'https://www.instagram.com/agoraswap/',
  },
  {
    iconDark: MediumIconDark,
    iconLight: MediumIcon,
    link: 'https://medium.com/@AgoraX',
  },
];

export default function Socials() {
  const { theme } = useTheme();
  return icons.map((d) => (
    <Link to={d.link} target='_blank' rel='noopener noreferrer'>
      {theme === 'dark' ? <d.iconDark className='max-w-18' /> : <d.iconLight className='max-w-18' />}
    </Link>
  ));
}
