import { forwardRef, useState } from 'react';
import Image from 'next/image'
import NotFound from '@/images/error/error.svg'
const ExternalImage = forwardRef((props,ref) => {
    const {src,quality,alt, folder,...rest} = props;
    const source = `${process.env.IMAGE_DOMAIN}/${folder}/${src}`;
    return (
        <Image
            src={source}
            {...rest}
            quality={quality}
            alt={alt}
            //onError={() => setSource(NotFound)}
        />
    )
})
ExternalImage.defaultProps = {
    folder:'uploads',
}
export default ExternalImage


