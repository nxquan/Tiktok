import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './DiscoverItem.module.scss';
const cx = classNames.bind(styles);

function DiscoverItem({ icon, title, to }) {
    return (
        <Link to={to} className={cx('discover-item')}>
            <span className={cx('icon')}>{icon}</span>
            <p className={cx('title')}>{title}</p>
        </Link>
    );
}

export default DiscoverItem;
