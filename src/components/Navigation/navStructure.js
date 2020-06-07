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
                    route: '/personalitems'
                },
                {
                    label: 'Services',
                    route: '/services'
                 },
                 {
                    label: 'Electronics',
                    route: '/electronics'
                 },
                {
                    label: 'Automotive',
                    route: '/automotive'
                }
            ]
    },
    {
        label: 'Login',
        route: '/login',
    },
]