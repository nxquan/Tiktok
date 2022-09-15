import config from '@/config';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { Menu, MenuItem } from '@/layouts/components/Sidebar/Menu';
import {
    HomeIcon,
    UsersGroupIcon,
    LiveIcon,
    SolidHomeIcon,
    SolidUsersGroupIcon,
    SolidLiveIcon,
} from '@/components/Icons';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    solidIcon={<SolidHomeIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UsersGroupIcon />}
                    solidIcon={<SolidUsersGroupIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    solidIcon={<SolidLiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
