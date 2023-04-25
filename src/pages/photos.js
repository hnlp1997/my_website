import Link from "next/link";
import Image from "next/image";
import cloudinary from "../lib/cloudinary";
import getBase64ImageUrl from "../lib/getbase64imageurl";
import Layout from "../components/layout.js";

const name = "Photos";
export const siteTitle = 'Nam';

export default function Photos({ images }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {images.map((image) => (
          <Image
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_482,h_700/${image.public_id}.${image.format}`}
            width={482}
            height={700}
            sizes="(max-width: 640px) 100vw,
    (max-width: 1280px) 50vw,
    (max-width: 1536px) 33vw,
    25vw"
            style={{ transform: "translate3d(0, 0, 0)" }}
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
          ></Image>
        ))}
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  const reducedResults = [];

  let i = 0;
  for (const result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });

    i++;
  }

  console.log(reducedResults);
  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
