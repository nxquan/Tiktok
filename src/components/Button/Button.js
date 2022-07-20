import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import '@fortawesome/free-solid-svg-icons';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    text,
    primary,
    outline,
    round,
    small,
    large,
    leftIcon,
    rightIcon,
    disabled,
    none,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const _props = {
        onClick,
        ...passProps,
    };
    //Remove all event when the button is disabled
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }
    if (to) {
        _props.to = to;
        Component = Link;
    } else if (href) {
        _props.href = href;
        Component = 'a';
    }

    let classes = cx(
        'wrapper',
        { [className]: className },
        { primary },
        { outline },
        { round },
        { small },
        { large },
        { text },
        { disabled },
        { none },
    );

    return (
        <Component className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    round: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    disabled: PropTypes.bool,
    none: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
