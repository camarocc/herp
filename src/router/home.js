import Index from '@/components/home/index'
import Home from '@/components/home/home'
import Group from './group'
export default [
	{
		path:'/',
		component:Index,
		children:[{
			path:'/home',
			alias:'/index',
			component:Home
		},...Group]
	}
]