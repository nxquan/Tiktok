import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

//Axios
import * as searchService from '@/services/searchService';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import { SearchIcon } from '@/components/Icons';
import { useDebounce } from '@/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // eslint-disable-next-line
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    let debouncedValue = useDebounce(searchValue, 800);

    useEffect(() => {
        if (debouncedValue.trim().length !== 0) {
            const fetchApi = async () => {
                setLoading(true);
                const result = await searchService.search(debouncedValue);
                setSearchResult(result);
                setLoading(false);
            };
            fetchApi();
        } else {
            setSearchResult([]);
        }
    }, [debouncedValue]);

    const handleChangeSearchValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
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
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search accounts and videos"
                        className={cx('search-input')}
                        value={searchValue}
                        onChange={handleChangeSearchValue}
                        onFocus={() => setShowResult(true)}
                        ref={inputRef}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={(e) => {
                                setSearchValue('');
                                setShowResult(false);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <span className={cx('search-line')}></span>

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
