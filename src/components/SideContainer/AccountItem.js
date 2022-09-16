import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SideContainer.module.scss';
import Image from '@/components/Image';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('preview-wrapper')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy
            interactive
            placement="bottom-start"
            offset={[0, 0]}
            delay={[500, 500]}
            render={renderPreview}
        >
            <Link to={`/@`} className={cx('account-item')}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663473600&x-signature=dzJudYdNwaM8im6k63hHt7vBkcg%3D"
                    className={cx('avatar')}
                />
                <div className={cx('inner')}>
                    <h4 className={cx('title')}>
                        Le Bong
                        {true && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                    </h4>
                    <p className={cx('description')}>lebong.com</p>
                </div>
            </Link>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
