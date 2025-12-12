import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, Fragment, useEffect, useState} from 'react';

import {BlogPost} from '../../data/dataDef';

interface BlogModalProps {
    post: BlogPost | null;
    isOpen: boolean;
    onClose: () => void;
}

const BlogModal: FC<BlogModalProps> = ({post, isOpen, onClose}) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Reset lightbox state when modal closes or post changes
    useEffect(() => {
        if (!isOpen) {
            setIsLightboxOpen(false);
        }
    }, [isOpen, post]);

    if (!post) return null;

    return (
        <>
            <Transition appear as={Fragment} show={isOpen}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    {/* Backdrop */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                    </Transition.Child>

                    {/* Modal Position */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            {/* Modal Panel */}
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95 translate-y-4"
                                enterTo="opacity-100 scale-100 translate-y-0"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100 translate-y-0"
                                leaveTo="opacity-0 scale-95 translate-y-4">
                                <Dialog.Panel className="w-full max-w-3xl transform rounded-2xl bg-neutral-900 text-left align-middle shadow-xl transition-all border border-neutral-700">
                                    {/* Close Button */}
                                    <div className="absolute top-4 right-4 z-30">
                                        <button
                                            className="rounded-full bg-black/50 p-2 text-white hover:bg-blue-500 transition-colors duration-200 focus:outline-none"
                                            onClick={onClose}
                                            type="button">
                                            <XMarkIcon className="h-6 w-6" />
                                        </button>
                                    </div>

                                    {/* Hero Image */}
                                    {post.image && (
                                        <div
                                            className="relative h-64 sm:h-80 w-full cursor-zoom-in group rounded-t-2xl overflow-hidden"
                                            onClick={() => setIsLightboxOpen(true)}
                                        >
                                            <Image
                                                alt={post.title}
                                                className="object-cover transition-transform duration-500"
                                                layout="fill"
                                                src={post.image}
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity duration-300">
                                                    Click to view full image
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="relative p-6 sm:p-10 -mt-10 z-20">
                                        <div className="mb-6">
                                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
                                                {new Date(post.date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})}
                                            </span>
                                            <Dialog.Title as="h3" className="text-3xl font-bold leading-tight text-white mb-2">
                                                {post.title}
                                            </Dialog.Title>
                                            <p className="text-sm text-neutral-400">
                                                Written by <span className="text-white font-medium">{post.author}</span>
                                            </p>
                                        </div>

                                        <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
                                            {post.content.split(/<split para>|\n/).map((paragraph, index) => (
                                                paragraph.trim() && (
                                                    <p className="mb-4 leading-relaxed" key={index}>
                                                        {paragraph.trim()}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Lightbox - Nested Dialog for correct Portalling */}
            <Transition appear as={Fragment} show={isLightboxOpen}>
                <Dialog as="div" className="relative z-[60]" onClose={() => setIsLightboxOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl" />
                    </Transition.Child>

                    {/* Close Button - Fixed to viewport */}
                    <div className="fixed top-6 right-6 z-[100]">
                        <button
                            className="rounded-full bg-black/50 p-3 text-white hover:bg-blue-500 transition-colors focus:outline-none backdrop-blur-md border border-white/10"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                    </div>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center shadow-none bg-transparent">
                                    {post.image && (
                                        <div
                                            className="relative w-full h-[80vh] rounded-lg overflow-hidden cursor-zoom-out"
                                            onClick={() => setIsLightboxOpen(false)}
                                        >
                                            <Image
                                                alt={post.title}
                                                className="object-contain"
                                                layout="fill"
                                                src={post.image}
                                            />
                                        </div>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default BlogModal;
