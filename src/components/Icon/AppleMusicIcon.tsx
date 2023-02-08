import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const AppleMusicIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M127.98 32.668c0-3.936-.332-7.856-1.272-11.688-1.688-6.98-5.668-12.312-11.624-16.228-3.064-2-6.436-3.228-10.02-3.876-2.752-.5-5.54-.728-8.332-.792-.208-.02-.436-.064-.668-.084h-64.124c-.812.064-1.624.104-2.436.144-3.98.228-7.936.644-11.688 2.144-7.124 2.812-12.272 7.728-15.272 14.812-1.04 2.396-1.564 4.936-1.936 7.52-.312 2.084-.48 4.188-.54 6.292 0 .168-.04.332-.04.5v65.188c.04.752 .084 1.5.124 2.252.272 4.356.832 8.668 2.668 12.668 3.46 7.564 9.272 12.54 17.252 14.936 2.228.688 4.564 1 6.896 1.208 2.96.292 5.916.332 8.876.332h58.832c2.792 0 5.584-.188 8.376-.54 4.396-.564 8.52-1.856 12.252-4.312 4.48-2.96 7.856-6.876 10.02-11.772 1-2.252 1.564-4.644 1.98-7.064.604-3.604.728-7.252.728-10.896-.02-20.252 0-40.5-.02-60.752zM93.728 53.936v30.46c0 2.228-.312 4.416-1.312 6.436-1.54 3.144-4.04 5.124-7.396 6.084-1.856.54-3.772.832-5.708.916-5.064.252-9.46-3.188-10.356-8.188-.772-4.124 1.208-8.668 5.54-10.792 1.708-.832 3.564-1.332 5.416-1.708 2.02-.436 4.04-.832 6.04-1.292 1.48-.332 2.436-1.228 2.728-2.752.084-.332.104-.688.104-1.02 0-9.688 0-19.376 0-29.04 0-.332-.064-.668-.144-.98-.208-.812-.792-1.292-1.624-1.252-.856.04-1.688.188-2.52.356-4.064.792-8.124 1.604-12.168 2.436l-19.728 3.98c-.084.02-.188.064-.272.064-1.48.416-2 1.084-2.064 2.624-.02.228 0 .46 0 .688-.02 13.876 0 27.752-.02 41.624 0 2.252-.252 4.46-1.144 6.54-1.48 3.416-4.104 5.564-7.644 6.584-1.876.54-3.792.856-5.752.916-5.104.188-9.356-3.208-10.228-8.228-.752-4.332 1.228-9 6.144-11.084 1.916-.792 3.896-1.228 5.916-1.644 1.52-.312 3.064-.624 4.584-.936 2.04-.436 3.104-1.728 3.208-3.812v-.792c0-15.792 0-31.584 0-47.376 0-.668.084-1.332.228-1.98.376-1.52 1.46-2.396 2.916-2.752 1.356-.356 2.752-.604 4.124-.896 3.916-.792 7.812-1.584 11.728-2.356l12.104-2.46c3.584-.708 7.144-1.436 10.728-2.144 1.168-.228 2.356-.48 3.54-.564 1.644-.144 2.792.896 2.96 2.564.04 .396.064 .792.064 1.188 0 10.188 0 20.376 0 30.564z"
      fill="currentColor"></path>
  </Icon>
));

export default AppleMusicIcon;