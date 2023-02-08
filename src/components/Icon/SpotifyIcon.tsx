import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const SpotifyIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M64 0c-35.212 0-64 28.788-64 64s28.788 64 64 64c35.212 0 64-28.788 64-64s-28.48-64-64-64zM93.44 92.48c-1.276 1.916-3.524 2.56-5.44 1.268-15.04-9.268-33.916-11.188-56.332-6.08-2.228.66-4.148-.94-4.796-2.88-.624-2.228.96-4.144 2.876-4.788 24.336-5.44 45.46-3.212 62.084 7.04 2.252.96 2.56 3.52 1.604 5.44zM101.124 74.876c-1.604 2.252-4.48 3.212-6.732 1.604-17.268-10.564-43.52-13.748-63.664-7.356-2.564.624-5.46-.644-6.084-3.212-.644-2.56.624-5.436 3.188-6.08 23.376-7.044 52.164-3.504 72 8.644 1.936.96 2.896 4.164 1.292 6.396zM101.772 56.96c-20.5-12.172-54.732-13.44-74.252-7.356-3.204.956-6.396-.96-7.356-3.856-.956-3.188.96-6.396 3.836-7.356 22.732-6.724 60.164-5.436 83.856 8.644 2.876 1.604 3.828 5.44 2.228 8.316-1.604 2.252-5.44 3.204-8.316 1.604z"
      fill="currentColor"></path>
  </Icon>
));

export default SpotifyIcon;