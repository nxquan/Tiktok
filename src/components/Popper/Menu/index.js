import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items, children }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item}></MenuItem>;
        });
    };
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopWrapper className={cx('popper-menu')}>
                        <ul className={cx('menu-list')}>{renderItem()}</ul>
                    </PopWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
