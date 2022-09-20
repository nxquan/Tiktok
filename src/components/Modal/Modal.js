import { useTransition, animated } from '@react-spring/web';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, isShowModal }, ref) {
    const transitions = useTransition(isShowModal, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: {
            duration: 100,
        },
    });
    return transitions(
        (styles, child) =>
            child && (
                <animated.div styles={styles} className={cx('wrapper')}>
                    {children}
                </animated.div>
            ),
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};
export default forwardRef(Modal);
