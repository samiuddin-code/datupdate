
import { forwardRef } from 'react';
import Image from 'next/image';
import NotFound from '@/images/error/error.svg';

const GeneralImage = forwardRef((props, ref) => {
    const { src, quality, alt, folder = 'uploads', ...rest } = props;
    const source = `${process.env.IMAGE_DOMAIN}/${folder}/${src}`;

    return (
        <span style={{
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            
        }}>
            <span style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                paddingTop: '56.285714285714285%'
            }}>
            </span>
            <Image
                src={source}
                quality={quality}
                ref={ref}
                alt={alt}
                {...rest}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: 0,
                    height: 0,
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover'
                }}
                // Uncomment and use the onError handler if needed
                // onError={() => setSource(NotFound)}
            />
        </span>
    );
});

GeneralImage.displayName = 'GeneralImage';

export default GeneralImage;

