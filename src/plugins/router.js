import {createRouter, createWebHistory} from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/components/Home'),
		},
		{
			path: '/button',
			name: 'ShowcaseButton',
			component: () => import('@/components/ShowcaseButton'),
		},
		{
			path: '/list',
			name: 'ShowcaseList',
			component: () => import('@/components/ShowcaseList'),
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: {name: 'Home'},
		},
	],
});
