import HeaderOnly from '@/components/Layouts/HeaderOnly';

import HomePage from '@/pages/Home';
import FollowingPage from '@/pages/Following';
import ProfilePage from '@/pages/Profile';
import UploadPage from '@/pages/Upload';
import Feedback from '@/pages/Feedback';

//Publi route for users who don't login
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage, layout: null },
    { path: '/upload', component: UploadPage, layout: HeaderOnly },
    { path: '/feedback', component: Feedback },
];

//Publi route for users who do login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
