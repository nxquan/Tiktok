import routeConfig from '@/config/routes';
import HeaderOnly from '@/components/Layouts/HeaderOnly';

import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Feedback from '@/pages/Feedback';

//Publi route for users who don't login
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.feedback, component: Feedback },
];

//Publi route for users who do login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
