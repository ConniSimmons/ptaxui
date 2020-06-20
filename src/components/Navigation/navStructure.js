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
                    label: 'Personal Items',
                    route: '/products'
                },
                {
                    label: 'Services',
                    route: '/products'
                 },
                 {
                    label: 'Electronics',
                    route: '/products'
                 },
                {
                    label: 'Automotive',
                    route: '/products'
                }
            ]
    },
    {
        label: 'Login',
        route: '/login',
    },
]