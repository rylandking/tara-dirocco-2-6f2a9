import * as React from 'react';
import Link from '@stackbit/components/dist/utils/link';
import { getComponent } from '@stackbit/components/dist/components-registry';

export default function FeaturedCardsSection({
    annotationPrefix,
    title,
    subtitle,
    titleOne,
    excerptOne,
    featuredImageOne,
    linkOne,
    titleTwo,
    excerptTwo,
    featuredImageTwo,
    linkTwo,
    titleThree,
    excerptThree,
    featuredImageThree,
    linkThree
}) {

    const ImageBlock = getComponent('ImageBlock');

    return (
        <div
            className="w-full flex justify-center pt-10 pb-14 px-8 xl:px-32"
            data-sb-field-path={annotationPrefix}
        >
            <div className="flex flex-col max-w-screen-2xl">
                <div className="w-full pb-10">
                    <h2 className="text-3xl sm:text-4xl text-center mb-3" data-sb-field-path="title">{title}</h2>
                    <p className="text-lg sm:text-xl text-center" data-sb-field-path=".subtitle">{subtitle}</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {/* Feature Card One */}
                    <Link href={linkOne}>
                        <article className="sb-card">
                            <div href={linkOne} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImageOne">
                                <ImageBlock {...featuredImageOne} className="absolute left-0 top-0 h-full w-full object-cover" />
                                {/* <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" /> */}
                            </div>
                            <div className="px-4 py-6 sm:px-6 sm:pb-10 bg-gray-100">
                                <h2 className="text-xl sm:text-2xl mb-1" data-sb-field-path=".titleOne">
                                    {titleOne}
                                </h2>
                                <p data-sb-field-path=".excerptOne">{excerptOne}</p>
                            </div>
                        </article>
                    </Link>
                    {/* Feature Card Two */}
                    <article className="sb-card">
                        <Link href={linkTwo} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImageTwo">
                            <ImageBlock {...featuredImageTwo} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                        <div className="px-4 py-6 sm:px-6 sm:pb-10 bg-gray-100">
                            <h2 className="text-xl sm:text-2xl mb-1">
                                <Link href={linkTwo} data-sb-field-path=".titleTwo">
                                    {titleTwo}
                                </Link>
                            </h2>
                            <p data-sb-field-path=".excerptTwo">{excerptTwo}</p>
                        </div>
                    </article>
                    {/* Feature Card Three */}
                    <article className="sb-card">
                        <Link href={linkThree} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImageThree">
                            <ImageBlock {...featuredImageThree} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                        <div className="px-4 py-6 sm:px-6 sm:pb-10 bg-gray-100">
                            <h2 className="text-xl sm:text-2xl mb-1">
                                <Link href={linkThree} data-sb-field-path=".titleThree">
                                    {titleThree}
                                </Link>
                            </h2>
                            <p data-sb-field-path=".excerptThree">{excerptThree}</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
