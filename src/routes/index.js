import config from '@/config';
import HeaderOnly from '@/layouts/HeaderOnly';

import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Feedback from '@/pages/Feedback';

//Public route for users who don't login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.feedback, component: Feedback },
];

//Public route for users who do login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
