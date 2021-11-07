import * as React from 'react';

export default function FeaturedCardsSection({ annotationPrefix, title, subtitle }) {

    return (
        <div
            className="w-full flex justify-center pt-6 pb-10"
            data-sb-field-path={annotationPrefix}
        >
            <div className="flex flex-col max-w-screen-2xl">
                <div className="w-full">
                    <h2 className="text-3xl sm:text-4xl text-center">{title}</h2>
                    <p className="text-lg sm:text-xl text-center">{subtitle}</p>                    
                </div>
                <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                    <article className="sb-card">
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImage">
                                <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                            </Link>
                        <div className="px-4 py-6 sm:px-6 sm:pb-10">
                            
                                <h3 className="text-xl sm:text-2xl mb-1">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                            ) : (
                                    <h2 className="text-xl sm:text-2xl mb-1">
                                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                            {post.title}
                                        </Link>
                                    </h2>
                                )}
                            {post.excerpt && <p data-sb-field-path="excerpt">{post.excerpt}</p>}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

function featuredCards(props) {
    const featuredCards = props.featuredCards || [];
    if (featuredCards.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');

    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8" data-sb-field-path=".posts">
            {featuredCards.map((post, index) => {
                return (
                    <article key={index} className="sb-card" data-sb-object-id={post.__metadata.id}>
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImage">
                                <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                            </Link>
                        )}
                        <div className="px-4 py-6 sm:px-6 sm:pb-10">
                            {props.title ? (
                                <h3 className="text-xl sm:text-2xl mb-1">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                            ) : (
                                    <h2 className="text-xl sm:text-2xl mb-1">
                                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                            {post.title}
                                        </Link>
                                    </h2>
                                )}
                            {post.excerpt && <p data-sb-field-path="excerpt">{post.excerpt}</p>}
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

// function featuredPostsActions(props) {
//     const actions = props.actions || [];
//     if (actions.length === 0) {
//         return null;
//     }
//     const styles = props.styles || {};
//     const Action = getComponent('Action');
//     return (
//         <div
//             className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
//             data-sb-field-path=".actions"
//         >
//             {props.actions.map((action, index) => (
//                 <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
//             ))}
//         </div>
//     );
// }