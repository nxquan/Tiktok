import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '@/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

// eslint-disable-next-line
export default Image = forwardRef(
    ({ src, alt, className, fallBack = images.noImage, ...props }, ref) => {
        const [image, setImage] = useState('');
        const handleError = () => {
            setImage(fallBack);
        };
        return (
            <img
                src={image || src}
                alt={alt}
                className={classNames(styles.wrapper, className)}
                ref={ref}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};
