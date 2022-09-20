import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Authen.module.scss';
import {
    UserIcon,
    FacebookIcon,
    GoogleIcon,
    LineIcon,
    KakaoTalkIcon,
    TwitterIcon,
} from '@/components/Icons';
import ConnectItem from './ConnectItem';

const cx = classNames.bind(styles);

const defaultConnectList = [
    {
        icon: <UserIcon />,
        title: 'Use phone / email /username',
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
    },
];

const extensiveConnectList = [
    {
        icon: <TwitterIcon />,
        title: 'Continue with Twitter',
    },
    {
        icon: <LineIcon />,
        title: 'Continue with with Line',
    },
    {
        icon: <KakaoTalkIcon />,
        title: 'Continue with KakaoTalk',
    },
];
function Register({ onChangeAuthen }) {
    const [connects, setConnects] = useState(defaultConnectList);

    const handleAddExtensiveConnect = () => {
        setConnects((prevConnects) => {
            return [...prevConnects, ...extensiveConnectList];
        });
    };
    const handleResetConnects = () => {
        setConnects((prevConnects) => defaultConnectList);
    };
    return (
        <div className={cx('authen')}>
            <h4 className={cx('heading')}>Sign up for TikTok</h4>
            <div className={cx('connect-list')}>
                {connects.map((item, index) => (
                    <ConnectItem item={item} key={index} />
                ))}
            </div>
            {!(connects.length > defaultConnectList.length) && (
                <div>
                    <button className={cx('more-btn')} onClick={handleAddExtensiveConnect}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            )}
            <p className={cx('policy')}>
                By continuing, you agree to
                <a href="https://www.tiktok.com/legal/terms-of-service-row?lang=vi&selection=true">
                    TikTok's Terms
                </a>{' '}
                of Service and confirm that you have read TikTok's{' '}
                <a href="https://www.tiktok.com/legal/page/row/privacy-policy/en">Privacy Policy</a>
                .
            </p>
            <div className={cx('footer')}>
                <p>
                    Already have an account?
                    <button
                        onClick={() => {
                            onChangeAuthen();
                            handleResetConnects();
                        }}
                    >
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Register;
