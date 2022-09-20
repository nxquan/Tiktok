import classNames from 'classnames/bind';

import styles from './Authen.module.scss';

const cx = classNames.bind(styles);

function ConnectItem({ item }) {
    return (
        <div className={cx('connect-item')}>
            <span className={cx('connect-icon')}>{item.icon}</span>
            {item.title}
        </div>
    );
}

export default ConnectItem;
