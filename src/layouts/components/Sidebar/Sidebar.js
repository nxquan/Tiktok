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
    SharpIcon,
    NoteMusicIcon,
} from '@/components/Icons';
import DiscoverItem from '@/components/SideContainer/DiscoverItem';
import Information from '@/components/SideContainer/Information';

const cx = classNames.bind(styles);
const infoTiktok = [
    {
        id: 1,
        link: 'google.com',
        title: 'About',
    },
    {
        id: 2,
        link: 'google.com',
        title: 'TikTok Browse',
    },
    {
        id: 3,
        link: 'google.com',
        title: 'Newsroom',
    },
    {
        id: 4,
        link: 'google.com',
        title: 'Contacts',
    },
    {
        id: 5,
        link: 'google.com',
        title: 'Careers',
    },
    {
        id: 6,
        link: 'google.com',
        title: 'ByteDance',
    },
];

const infoAdvertisement = [
    {
        id: 1,
        link: 'google.com',
        title: 'TikTok for Good',
    },
    {
        id: 2,
        link: 'google.com',
        title: 'Advertise',
    },
    {
        id: 3,
        link: 'google.com',
        title: 'Developers',
    },
    {
        id: 4,
        link: 'google.com',
        title: 'Transparency',
    },
    {
        id: 5,
        link: 'google.com',
        title: 'Tiktok Rewards',
    },
];
const infoPolicy = [
    {
        id: 1,
        link: 'google.com',
        title: 'Help',
    },
    {
        id: 2,
        link: 'google.com',
        title: 'Safety',
    },
    {
        id: 3,
        link: 'google.com',
        title: 'Terms',
    },
    {
        id: 4,
        link: 'google.com',
        title: 'Privacy',
    },
    {
        id: 5,
        link: 'google.com',
        title: 'Creator Portal',
    },
    {
        id: 6,
        link: 'google.com',
        title: 'Community Guidelines',
    },
];
const infoCopyright = [
    {
        id: 1,
        link: '#',
        title: '© 2022 TikTok',
    },
];
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
                <SideContainer label="Discover">
                    <DiscoverItem icon={<SharpIcon />} title="suthatla" to="/discover/suthatla" />
                    <DiscoverItem icon={<SharpIcon />} title="suthatla" to="/discover/suthatla" />
                    <DiscoverItem icon={<SharpIcon />} title="suthatla" to="/discover/suthatla" />
                    <DiscoverItem
                        icon={<NoteMusicIcon />}
                        title="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n"
                        to="/discover/suthatla"
                    />
                    <DiscoverItem
                        icon={<NoteMusicIcon />}
                        title="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng"
                        to="/discover/suthatla"
                    />
                    <DiscoverItem
                        icon={<NoteMusicIcon />}
                        title="Thiên Thần Tình Yêu - RICKY STAR"
                        to="/discover/suthatla"
                    />
                    <DiscoverItem
                        icon={<NoteMusicIcon />}
                        title="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham"
                        to="/discover/suthatla"
                    />
                </SideContainer>
                <SideContainer label="Information">
                    <Information data={infoTiktok} />
                    <Information data={infoAdvertisement} />
                    <Information data={infoPolicy} />
                    <Information data={infoCopyright} />
                </SideContainer>
            </Menu>
        </aside>
    );
}

export default Sidebar;
