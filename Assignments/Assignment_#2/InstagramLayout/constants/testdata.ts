import { User, Post, Notification } from '@/models/models';

export const users: User[] = [
    {
        id: '1',
        username: 'johndoe',
        profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        bio: 'Just a regular John Doe.',
        postsCount: 10,
    },
    {
        id: '2',
        username: 'janedoe',
        profilePictureUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        bio: 'Just a regular Jane Doe.',
        postsCount: 8,
    },
];

export const posts: Post[] = [
    {
        id: '1',
        userId: '1',
        imageUrl: 'https://picsum.photos/600/400?image=10',
        caption: 'Beautiful sunset!',
        likes: 100,
    },
    {
        id: '2',
        userId: '2',
        imageUrl: 'https://picsum.photos/600/400?image=20',
        caption: 'Delicious food!',
        likes: 200,
    },
];

export const notifications: Notification[] = [
    {
        id: '1',
        type: 'like',
        postId: '1',
        userId: '2',
        message: 'janedoe liked your post.',
        createdAt: new Date(),
    },
    {
        id: '2',
        type: 'comment',
        postId: '2',
        userId: '1',
        message: 'johndoe commented on your post.',
        createdAt: new Date(),
    },
];
