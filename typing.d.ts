import Category from './components/Category';

export interface Post {
    _id: number;
    title: string;
    author: {
        name: string;
        image: string;
    },
    comments: Comment[];
    description: string,
    mainImage: {
        asset: {
            url: string;
        }
    },
    slug: {
        current: string
    },
    body: [object]
    categories: [object]
    _createdAt: string;
}

export interface Comment {
    _id: number;
    approved: boolean;
    name: string;
    email: string;
    comment: string;
    post: {
        _ref: string;
        _type: string;
    },
    _createdAt: string,
    _rev: string;
    _type: string;
    _updatedAt: string;
}

export interface Category {
    _id: number;
    title: string;
    description: string;
    slug: {
        current: string
    },
}

export interface PostProps {
    posts: [Post];
}

export interface CategoryProps {
    categories: [Category];
}

export interface Props {
    posts: [Post];
    categories: [Category];
}


