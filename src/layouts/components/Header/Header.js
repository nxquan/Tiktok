import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisV,
    faLanguage,
    faKeyboard,
    faQuestionCircle,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//Components
import images from '@/assets/images';
import Button from '@/components/Button';
import { Menu } from '@/components/Popper/index';
import { InboxIcon, MessageIcon } from '@/components/Icons';
import Image from '@/components/Image';
import Search from '../Search';

//Route config
import routeConfig from '@/config/routes';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    let currentUser = false;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;
            default:
        }
    };
    const currentUserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/login',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routeConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo tiktok" />
                </Link>

                <Search />

                <div className={cx('utility')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} to="/upload">
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('util-btn', 'util-btn--ml')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('util-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Login</Button>
                    )}
                    <Menu
                        items={currentUser ? currentUserMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="User avatar"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1667290336699393.jpeg?x-expires=1658192400&x-signature=EQ7hnQPYs40m7NUX7b%2BY11KfFgA%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
