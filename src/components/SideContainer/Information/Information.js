import classNames from 'classnames/bind';
import styles from './Information.module.scss';

const cx = classNames.bind(styles);

function Information({ data }) {
    const renderData = () => {
        return data.map((item) => {
            const Element = item.link === '#' ? 'p' : 'a';

            return (
                <Element key={item.id} href={item.link} className={cx('info-link')}>
                    {item.title}
                </Element>
            );
        });
    };
    return <div className={cx('info')}>{renderData()}</div>;
}

export default Information;
