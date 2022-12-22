// import router from './router'
// import { useAuthStore } from './store/auth'
// import { dynamicRoutes } from './router/routes'

// router.beforeEach((to, from, next) => {
// 	const authStore = useAuthStore()
// 	dynamicRoutes[0].children = authStore.routes
// 	authStore.routes.forEach((route) => {
// 		router.addRoute(route)
// 	})
// 	router.addRoute(dynamicRoutes[0])
// 	next()
// })
// console.log(router)
