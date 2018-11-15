import Mock from 'mockjs'
Mock.mock('/api/head', 'get', (req, res) => {
  return {
    code: 200,
    data: [{
      'icon': 'ios-navigate',
      'id': 1
    }, {
      'icon': 'ios-keypad',
      'id': 2
    }, {
      'icon': 'ios-analytics',
      'id': 3
    }, {
      'icon': 'ios-paper',
      'id': 4
    }],
    message: '查询成功'
  }
})
Mock.mock('/api/vehicle', 'post', (req, res) => {
  return {
    code: 200,
    data: [
      {
        id: 0,
        title: '牌照1',
        licNumber: '陕A79898',
        color: 1,
        buyTime: '2018-04-01 11:34:34'
      }, {
        id: 1,
        title: '牌照2',
        licNumber: '陕A79898',
        color: 2,
        buyTime: '2018-04-02 17:34:28'
      }
    ],
    message: '查询成功'
  }
})
Mock.mock('/api/menu', 'get', (req, res) => {
  return {
    code: 200,
    data: [
      {
        'id': '32043797638545408',
        'text': '系统管理',
        'iconCls': 'ios-cog-outline',
        'leaf': false,
        'sort': 1,
        'checked': false,
        'edit': true,
        'state': 'closed',
        'children': [
          {
            'id': '32043797714042880',
            'text': '权限管理',
            'iconCls': 'ios-unlock-outline',
            'leaf': false,
            'sort': 1,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '32043798229942272',
                'text': '应用管理',
                'iconCls': 'ios-photos-outline',
                'leaf': true,
                'sort': 2,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/application/list.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043798481600512',
                'text': '菜单管理',
                'iconCls': 'ios-list',
                'leaf': true,
                'sort': 3,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/menu/menu.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043798523543552',
                'text': '角色管理',
                'iconCls': 'md-people',
                'leaf': true,
                'sort': 5,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/role/role.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043798599041024',
                'text': '人员管理',
                'iconCls': 'ios-people',
                'leaf': true,
                'sort': 6,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/user/user.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043797781151744',
                'text': '功能权限管理',
                'iconCls': 'ios-settings',
                'leaf': true,
                'sort': 11,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/auth/functional_authority/functional_authority.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }, {
            'id': '32043799144300544',
            'text': '任务管理',
            'iconCls': 'ios-stopwatch-outline',
            'leaf': false,
            'sort': 3,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '32043799400153088',
                'text': '动态任务管理',
                'iconCls': 'ios-git-compare',
                'leaf': true,
                'sort': 1,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/common/dyna_task/dyna_task.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32043799651811328',
                'text': '时间任务管理',
                'iconCls': 'md-stopwatch',
                'leaf': true,
                'sort': 2,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/platform/base/common/time_task/time_task.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '39745781351055360',
                'text': '缓存管理',
                'iconCls': 'ios-albums-outline',
                'leaf': true,
                'sort': 3,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '\platform\base\common\cache\data_table.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }, {
            'id': '32043799718920192',
            'text': '字典管理',
            'iconCls': 'ios-book-outline',
            'leaf': true,
            'sort': 5,
            'checked': false,
            'edit': true,
            'state': '',
            'children': [],
            'attributes': {
              'url': '/platform/base/common/dict/dict.html',
              'openType': 0
            },
            'checkState': 'unchecked'
          }, {
            'id': '32043799807000576',
            'text': '安全策略配置',
            'iconCls': 'ios-finger-print',
            'leaf': true,
            'sort': 7,
            'checked': false,
            'edit': true,
            'state': '',
            'children': [],
            'attributes': {
              'url': '/platform/base/auth/security/security_policy.html',
              'openType': 0
            },
            'checkState': 'unchecked'
          }, {
            'id': '32043799848943616',
            'text': '属性管理',
            'iconCls': 'ios-filing-outline',
            'leaf': true,
            'sort': 9,
            'checked': false,
            'edit': true,
            'state': '',
            'children': [],
            'attributes': {
              'url': '/platform/base/common/property/property.html',
              'openType': 0
            },
            'checkState': 'unchecked'
          }, {
            'id': '36391850944233472',
            'text': '数据中心',
            'iconCls': 'md-flower',
            'leaf': false,
            'sort': 10,
            'checked': false,
            'edit': true,
            'state': 'closed',
            'children': [
              {
                'id': '32045523129073664',
                'text': '数据表配置',
                'iconCls': 'ios-heart-outline',
                'leaf': true,
                'sort': 7,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/datacenter/base/data_table/data_table.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32046655427575808',
                'text': '数据表信息管理',
                'iconCls': 'ios-ionic-outline',
                'leaf': true,
                'sort': 8,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/datacenter/base/data_management/data_management.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32047002711752704',
                'text': '接口管理',
                'iconCls': 'ios-magnet-outline',
                'leaf': true,
                'sort': 9,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '/datacenter/base/interface_management/interface_management.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }, {
                'id': '32047231108382720',
                'text': '接口权限配置',
                'iconCls': 'ios-menu-outline',
                'leaf': true,
                'sort': 10,
                'checked': false,
                'edit': true,
                'state': '',
                'children': [],
                'attributes': {
                  'url': '\datacenter\base\interface_permissions\interface_permissions.html',
                  'openType': 0
                },
                'checkState': 'unchecked'
              }
            ],
            'checkState': 'unchecked'
          }
        ],
        'checkState': 'unchecked'
      }
    ],
    message: '查询成功'
  }
})
