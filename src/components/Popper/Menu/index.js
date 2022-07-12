
import classNames from "classnames";
import Tippy from "@tippyjs/react/headless";

function Menu({ children }) {
    return ( 
        <Tippy
                    interactive={true}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopWrapper>
                        </div>
                    )}
                >
                    {children}
                </Tippy>
     );
}

export default Menu;