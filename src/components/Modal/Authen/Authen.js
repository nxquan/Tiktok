import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import styles from './Authen.module.scss';
import { forwardRef, useState } from 'react';
import Login from './Login';
import Register from './Register';

const cx = classNames.bind(styles);

function Authen(props, ref) {
    const { onCloseModal } = props;

    const [toggleAuthen, setToggleAuthen] = useState(true);

    const handleChangeAuthen = () => {
        setToggleAuthen((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')} ref={ref}>
            <button className={cx('close-btn')} onClick={onCloseModal}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            {toggleAuthen ? (
                <Login onChangeAuthen={handleChangeAuthen} />
            ) : (
                <Register onChangeAuthen={handleChangeAuthen} />
            )}
        </div>
    );
}

export default forwardRef(Authen);
