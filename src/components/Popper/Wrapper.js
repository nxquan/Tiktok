import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ className, children }) {
    let classes = cx('wrapper', { [className]: className });
    return <div className={classes}>{children}</div>;
}

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Wrapper;
