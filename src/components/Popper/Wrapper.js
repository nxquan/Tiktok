import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ className, children }) {
    let classes = cx('wrapper', { [className]: className });
    return <div className={classes}>{children}</div>;
}

export default Wrapper;
