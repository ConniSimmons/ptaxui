export default [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Products',
        route: '/products',
            children: [
                {
                    label: 'Submit Your Own Item',
                    route: '/submititem'
                },
                {
                    label: 'Business',
                    route: '/products'
                },
                {
                    label: 'Kids',
                    route: '/products'
                 },
                 {
                    label: 'Personal Items',
                    route: '/products'
                 },
                {
                    label: 'Sporting Goods',
                    route: '/products'
                }
            ]
    },
    {
        label: 'Login',
        route: '/login',
    },
]