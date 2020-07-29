

const getHomeSidebar = (title) => ({
    children: [
        {
            title,
            to: '/'
        }
    ]
})

const getStartSidebar = (title) => ({
    children: [{
        title,
        to: '/getting-started/',
        collapsable: false,
        headers: [
            {
                title: '构建于',
                slug: '构建于', // 当前页面的 id 锚点。
            },
            {
                title: '环境依赖',
                slug: '环境依赖', // 当前页面的 id 锚点。
            },
            {
                title: '应用主题',
                slug: '应用主题', // 当前页面的 id 锚点。
            },
        ],
    }]
})


/* const getConfigurationsSidebar = (title) => ({
    children: [{
        title,
        to: '/configurations/',
        collapsable: false,
        headers: [
            {
                title: '配置文件',
                slug: '配置文件', // 当前页面的 id 锚点。
            },
            {
                title: 'VuePress 配置',
                slug: 'VuePress 配置', // 当前页面的 id 锚点。
            },
            {
                title: '首页配置',
                slug: '首页配置', // 当前页面的 id 锚点。
            },
            {
                title: '侧边导航配置',
                slug: '侧边导航配置', // 当前页面的 id 锚点。
            },
            {
                title: '页面布局',
                slug: '页面布局', // 当前页面的 id 锚点。
            },
            {
                title: '多语言配置',
                slug: '多语言配置', // 当前页面的 id 锚点。
            },
        ],
    }]
}) */

const getConfigurationsSidebar = (titleA, titleB, titleC) => ({
    children: [
        {
            title: titleA,
            to: '/configurations/',
            headers: [
                {
                    title: '配置文件',
                    slug: '配置文件', // 当前页面的 id 锚点。
                },
                {
                    title: 'VuePress 配置',
                    slug: 'vuepress-配置', // 当前页面的 id 锚点。
                },
                {
                    title: '首页配置',
                    slug: '首页配置', // 当前页面的 id 锚点。
                },
                {
                    title: '侧边导航配置',
                    slug: '侧边导航配置', // 当前页面的 id 锚点。
                },
                {
                    title: '页面布局',
                    slug: '页面布局', // 当前页面的 id 锚点。
                },
                {
                    title: '多语言配置',
                    slug: '多语言配置', // 当前页面的 id 锚点。
                },
            ],
        },
        getComponentsSidebar(titleB),
        getTemplateSidebar(titleC)
    ]
})


/* const getComponentsSidebar = (title) => ({
    children: [{
        title,
        to: '/configurations/components',
        collapsable: false,
        headers: [
            {
                title: 'Block 组件',
                slug: 'Block 组件', // 当前页面的 id 锚点。
            },
            {
                title: 'Example 组件',
                slug: 'Example 组件', // 当前页面的 id 锚点。
            },
            {
                title: 'CURL 组件',
                slug: 'CURL 组件', // 当前页面的 id 锚点。
            },
            {
                title: 'Button 组件',
                slug: 'Button 组件', // 当前页面的 id 锚点。
            },
            {
                title: 'Section 组件',
                slug: 'Section 组件', // 当前页面的 id 锚点。
            },
        ],
    }]
}) */

const getComponentsSidebar = (title) => ({
    title,
    to: '/configurations/components.html',
    headers: [
        {
            title: 'Block 组件',
            slug: 'block-组件', // 当前页面的 id 锚点。
        },
        {
            title: 'Example 组件',
            slug: 'example-组件', // 当前页面的 id 锚点。
        },
        {
            title: 'CURL 组件',
            slug: 'curl-组件', // 当前页面的 id 锚点。
        },
        {
            title: 'Button 组件',
            slug: 'button-组件', // 当前页面的 id 锚点。
        },
        {
            title: 'Section 组件',
            slug: 'section-组件', // 当前页面的 id 锚点。
        },
    ],
})



/* const getTemplateSidebar = (title) => ({
    children: [
        {
            title,
            to: '/configurations/template'
        }
    ]
}) */

const getTemplateSidebar = (title) => ({
    title,
    to: '/configurations/template/'
})









module.exports = {
    title: 'Hello VuePress',
    description: '📦 🎨 A api-friendly theme for VuePress.',
    theme: 'api',
    locales: {
        '/': {
            lang: 'zh-hans'
        }
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
        ['meta', { charset: 'utf-8' }],
    ],
    themeConfig: {
        sidebar: {
            'home': getHomeSidebar('主页'),
            '0-getting-started': getStartSidebar('主题起步'),
            '1-configurations': getConfigurationsSidebar('基本配置', '内置组件', '文件模板'),
        },
        
        
    }
}

