<script lang="ts">
  import { Cloudinary } from '@cloudinary/url-gen';
  import { scale } from "@cloudinary/url-gen/actions/resize";

  const cloud = new Cloudinary({ cloud: { cloudName: 'jasher' } });
  
  export let id: string;
  export let widths: Array<number>;
  const images = widths.map(width => {
    const url = cloud.image(id)
                .format('webp')
                .quality('auto')
                .resize(scale().width(width))
                .toURL();

    return { url, width };
  });

  const srcset: string = images.map(image => `${image.url} ${image.width}w`).join(', ');
  const sizes: string = images.map((image, index) => index === images.length-1 ? `${image.width}px` : `(max-width: ${image.width}) ${image.width}px`).join(', ');
</script>

<img {srcset} {sizes} {...$$restProps} />
