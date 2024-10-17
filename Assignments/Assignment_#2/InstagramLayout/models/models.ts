export interface User {
    id: string;
    username: string;
    profilePictureUrl: string;
    bio: string;
    postsCount: number;
};

export interface Post {
    id: string;
    userId: string;
    imageUrl: string;
    caption: string;
    likes: number;
};

export interface Notification {
    id: string;
    type: 'like' | 'comment';
    postId: string;
    userId: string;
    message: string;
    createdAt: Date;
};