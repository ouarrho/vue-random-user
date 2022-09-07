
	import { createRouter, createWebHistory } from 'vue-router'

	import Card  from './components/Card'
	import About from './components/About'

	const routes = [

			{
				path: '/',
				name: 'Card',
				component: Card
			},

			{
				path: '/about',
				name: 'About',
				component: About
			}

		];

	const router = createRouter({

		history: createWebHistory( process.env.BASE_URL ),

		routes

	});

	export default router