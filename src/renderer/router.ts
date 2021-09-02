import Page from './pages/index';
import PageLogin from './pages/login/index';
import PageMain from './pages/main/index';
import PageMainPotato from './pages/main/potato/index';
import PageMainTomato from './pages/main/tomato/index';
import loadable from '@loadable/component';

const router=[
	{
		config: {
			htmlmeta: {
				title: '根'
			}
		},
		component: Page,
		path: '',
		child: [
			{
				config: {
					default: true,
					htmlmeta: {
						title: '登录'
					}
				},
				component: PageLogin,
				path: '/login',
				child: null
			},
			{
				config: {
					htmlmeta: {
						title: '首页'
					}
				},
				component: PageMain,
				path: '/main',
				child: [
					{
						config: {
							htmlmeta: {
								title: '土豆'
							},
							noLazy: true
						},
						component: PageMainPotato,
						path: '/main/potato',
						child: null
					},
					{
						config: {
							htmlmeta: {
								title: '西红柿'
							},
							noLazy: true
						},
						component: PageMainTomato,
						path: '/main/tomato',
						child: null
					}
				]
			}
		]
	}
]

export default router;