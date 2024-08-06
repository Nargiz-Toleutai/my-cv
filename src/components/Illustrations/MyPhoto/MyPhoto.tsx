import block from 'bem-cn-lite';
import React from 'react';

import myPhoto from '../../../assets/images/my-photo.svg';
import { Svg } from '../../Svg/Svg';
import './MyPhoto.scss';

const b = block('my-photo');

export const MyPhoto: React.FC = () => {
    return (
        <div className={b()}>
            <Svg src={myPhoto}/>
        </div>
    )
}