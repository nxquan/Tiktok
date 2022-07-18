import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import { SearchIcon } from '@/components/Icons';
import { useDebounce } from '@/hooks';

const cx = classNames.bind(styles);

function Search({}) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    let debounce = useDebounce(searchValue, 800);

    useEffect(() => {
        if (debounce.trim().length != 0) {
            setLoading(true);
            fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    debounce,
                )}&type=less`,
            )
                .then((res) => res.json())
                .then((accounts) => {
                    setSearchResult(accounts.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setSearchResult([]);
        }
    }, [debounce]);

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Search accounts and videos"
                    className={cx('search-input')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    ref={inputRef}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={(e) => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <span className={cx('search-line')}></span>

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
