import classNames from 'classnames/bind';

import styles from './Authen.module.scss';
import ConnectItem from './ConnectItem';
import {
    AppleIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    KakaoTalkIcon,
    LineIcon,
    QRIcon,
    TwitterIcon,
    UserIcon,
} from '@/components/Icons';
const cx = classNames.bind(styles);

const connectList = [
    {
        icon: <QRIcon />,
        title: 'Use QR code',
    },
    {
        icon: <UserIcon />,
        title: 'Use phone / email / username',
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
    },
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
    {
        icon: <AppleIcon />,
        title: 'Continue with Apple',
    },
    {
        icon: <InstagramIcon />,
        title: 'Continue with Instagram',
    },
];
function Login({ onChangeAuthen }) {
    return (
        <div className={cx('authen')}>
            <h4 className={cx('heading')}>Log in to Tiktok</h4>
            <div className={cx('connect-list')}>
                {connectList.map((item, index) => (
                    <ConnectItem item={item} key={index} />
                ))}
            </div>

            <div className={cx('footer')}>
                <p>
                    Don't have an account?
                    <button onClick={onChangeAuthen}>Sign up</button>
                </p>
            </div>
        </div>
    );
}

export default Login;
