import '@mdi/font/css/materialdesignicons.min.css';
import 'animate.css/animate.compat.css';
import '@/style.css';

import app from '@/app';
import router from '@/plugins/router';

app.use(router).mount('body');
