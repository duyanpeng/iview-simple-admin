import Main from '@/components/main'

const Home = ()=>import('../views/home/index.vue') // 首页
const User = ()=>import('../views/users/index.vue') // 用户管理
const UserBuild = ()=>import('../views/users/build.vue') // 用户管理新建
const UserEdit = ()=>import('../views/users/edit.vue') // 用户管理编辑
const UserDetail = ()=>import('../views/users/detail.vue') // 用户管理详情
const Message = ()=>import('../views/message/index.vue') // 报表管理
const MessageBuild = ()=>import('../views/message/build.vue') // 新增报表
const MessageEdit = ()=>import('../views/message/edit.vue') // 编辑报表
const MessageDetail = ()=>import('../views/message/detail.vue') // 报表详情
const Help = ()=>import('../views/help/index.vue') // 帮助文档
// 保存原来的路由配置作参考
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  needBread(false): 用于新建等页面提供面包屑
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {
  //     title: 'Login - 登录',
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/login/login.vue')
  // },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   meta: {
      //     hideInMenu: false,
      //     title: '首页',
      //      notCache: true,
      //     icon: 'md-home'
      //   },
      //   component: Home
      // }
    ]
  },

  {
    path: '/home',
    name: 'home_layout',
    meta: {
      hideInBread: true,
    },
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          icon: 'ios-book',
          title: '首页',
        },
        component: Home
      }
    ]
  },

  {
    path: '/appuser',
    name: 'appuser',
    meta: {
       hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'appuser_list',
        name: 'appuser_list',
        meta: {
          icon: 'ios-navigate',
          title: '用户管理'
        },
        component: User,
      },
      {
        path: 'appuser_build',
        name: 'appuser_build',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '新增用户'
        },
        component: UserBuild
      },
      {
        path: 'appuser_edit',
        name: 'appuser_edit',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '修改用户信息'
        },
        component: UserEdit
      },
      {
        path: 'appuser_detail',
        name: 'appuser_detail',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '查看用户信息'
        },
        component: UserDetail
      },
    ]
  },

  {
    path: '/develop',
    name: 'develop',
    meta: {
      icon: 'ios-hammer',
      title: '自助开发'
    },
    component: Main,
    children: [
      {
        path: 'table_list',
        name: 'table_list',
        meta: {
          icon: 'ios-infinite',
          title: '报表管理'
        },
        component: Message
      },

      {
        path: 'table_build',
        name: 'table_build',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '新增报表'
        },
        component: MessageBuild
      },
      {
        path: 'table_edit',
        name: 'table_edit',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '修改报表'
        },
        component: MessageEdit
      },
      {
        path: 'table_detail',
        name: 'table_detail',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '报表详情'
        },
        component: MessageDetail
      },



      {
        path: 'table2_list',
        name: 'table2_list',
        meta: {
          icon: 'ios-infinite',
          title: '报表管理'
        },
        component: Message
      },

      {
        path: 'table2_build',
        name: 'table2_build',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '新增报表'
        },
        component: MessageBuild
      },
      {
        path: 'table2_edit',
        name: 'table2_edit',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '修改报表'
        },
        component: MessageEdit
      },
      {
        path: 'table2_detail',
        name: 'table2_detail',
        meta: {
          hideInMenu: true,
          needBread:true,
          icon: 'ios-navigate',
          title: '报表详情'
        },
        component: MessageDetail
      },
    ]
  },


  {
    path: '/help',
    name: 'help',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'help_page',
        name: 'help_page',
        meta: {
          icon: 'ios-book',
          title: '帮助文档',
        },
        component: Help
      }
    ]
  },
  // {
  //   path: '/401',
  //   name: 'error_401',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/error-page/401.vue')
  // },
  // {
  //   path: '/500',
  //   name: 'error_500',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/error-page/500.vue')
  // },
  // {
  //   path: '*',
  //   name: 'error_404',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/error-page/404.vue')
  // }
]
