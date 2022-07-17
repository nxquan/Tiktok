import { forwardRef, useState } from 'react';
import images from '@/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

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
