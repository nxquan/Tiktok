import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_300x300.webp?x-expires=1657342800&x-signature=e%2FqkPCWfbkDUPMLZRHH8N7nrPxo%3D"
                className={cx('avatar')} alt="Avatar"
            />
            <div className={cx('inner')}>
                <h4 className={cx('title')}>
                    vtv24news
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('description')}>VTV24</p>
            </div>
        </div>
    );
}

export default AccountItem;
