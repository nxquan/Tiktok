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
        {[className]: className},
        { primary },
        { outline },
        { round },
        { small },
        { large },
        { text },
        { disabled },
        {none}
    );

    return (
        <Component className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
