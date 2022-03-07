<script lang="ts">
  import { Cloudinary } from '@cloudinary/url-gen';
  import { scale } from "@cloudinary/url-gen/actions/resize";

  // Props
  export let config: Config;
  export let alt: string;
  const { id, sizes, base } = config;

  const cloud = new Cloudinary({ cloud: { cloudName: 'jasher' } });

  type Size = {
    width: number;
    max_width: number;
  }
  type Config = {
    id: string;
    sizes: Array<Size>;
    base: Size;
  }

  const url = (size: Size) => {
    return cloud.image(id)
                .format('webp')
                .quality('auto')
                .resize(scale().width(size.width))
                .toURL();
  }
  
  const images = sizes.map(size => {
    const _url = url(size);
    return { url: _url, size };
  });

  // const _srcset: string = images.map(image => `${image.url} ${image.size.width}w`).join(', ');
  const _srcset: string = images.map((image, index) => `${image.url} ${index+2}x`).join(', ');
  // const _sizes: string = images.map((image, index) => index === images.length-1 ? `${image.size.width}px` : `(max-width: ${image.size.max_width}) ${image.size.width}px`).join(', ');
  const _src: string = url(base);
</script>

<img srcset={_srcset} src={_src} {alt} {...$$restProps} />
<!-- <img srcset={_srcset} sizes={_sizes} src={_src} {alt} {...$$restProps} /> -->
