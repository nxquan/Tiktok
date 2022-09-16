import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Image from '@/components/Image';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('preview')}>
            <div className={cx('header')}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663473600&x-signature=dzJudYdNwaM8im6k63hHt7vBkcg%3D"
                    alt="preview"
                    className={cx('avatar')}
                />

                <Button primary className={cx('following-btn')}>
                    Following
                </Button>
            </div>
            <div className={cx('body')}>
                <a href="google.com" className={cx('body-link')}>
                    <h4 className={cx('username')}>
                        Le bong
                        <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('bio')}>lebong.com</span>
                </a>
                <div className={cx('statistics')}>
                    <strong className={cx('quantity')}>400M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('quantity')}>300M</strong>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
