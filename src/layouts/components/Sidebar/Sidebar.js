import config from '@/config';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { Menu, MenuItem } from '@/layouts/components/Sidebar/Menu';
import SideContainer from '@/components/SideContainer';
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
                <div className={cx('main-action')}>
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
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        solidIcon={<SolidLiveIcon />}
                    />
                </div>
                <SideContainer label="Suggested accounts" />
                <SideContainer label="Following accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;