export default {
    init: 'VU',
    title: 'Admin Panel',
    profile_image: 'https://placehold.it/60/30a5ff/fff',
    username: 'User name',
    status: '1',
    sidebar_list: [
        {
            name: 'Dashboard',
            icon: 'fa fa-tachometer',
            link: '/dashboard',
            active: 1,
        },
        {
            name: 'Widjets',
            icon: 'fa fa-table',
            link: '/widjets',
            active: 1,
        },
        {
            name: 'Charts',
            icon: 'fa fa-pie-chart',
            link: '/charts',
            active: 1,
        },
        {
            name: 'Multilevel',
            icon: 'fa fa-bars',
            link: '#',
            active: 1,
            children: [
                {
                    name: 'Subitem1',
                    icon:'fa fa-arrow-right',
                    link: '#',
                    active: 1
                },
                {
                    name: 'Subitem2',
                    icon:'fa fa-arrow-right',
                    link: '#',
                    active: 1
                },
                {
                    name: 'Subitem3',
                    icon:'fa fa-arrow-right',
                    link: '#',
                    active: 1
                }
            ]
        },
        {
            name: 'UI Elements',
            icon: 'fa fa-toggle-on',
            link: '/ui_elements',
            active: 1,
        }
    ]
}