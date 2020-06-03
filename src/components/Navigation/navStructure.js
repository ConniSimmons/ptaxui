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
                    label: 'SubmitItem',
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
                    label: 'Automotive',
                    route: '/automotive'
                }
            ]
    },
    {
        label: 'Pasta',
    }
]