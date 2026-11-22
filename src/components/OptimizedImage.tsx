import type { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string };

// The original image stays as a browser fallback; remote admin images pass through unchanged.
export default function OptimizedImage({ src, loading = 'lazy', decoding = 'async', ...props }: Props) {
  const localImage = /^\/assets\/img\/.*\.(?:png|jpe?g)$/i.test(src);
  const webp = localImage ? src.replace(/\.(?:png|jpe?g)$/i, '.webp') : null;

  return (
    <picture style={{ display: 'contents' }}>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} loading={loading} decoding={decoding} {...props} />
    </picture>
  );
}
