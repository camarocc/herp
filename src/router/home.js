import Index from '@/components/home/index'
import Home1 from '@/components/home/home'
import Group from './group'
export default [
	{
		path:'/',
		component:Index,
		children:[{
			path:'/home',
			alias:'/index',
			component:Home1
		},...Group]
	}
]