import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideContainer.module.scss';

import { AccountItem } from './index.js';

const cx = classNames.bind(styles);

function SideContainer({ label, children }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {children ? (
                children
            ) : (
                <>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <p className={cx('more-action')}>See all</p>
                </>
            )}
        </div>
    );
}

SideContainer.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
};
export default SideContainer;
