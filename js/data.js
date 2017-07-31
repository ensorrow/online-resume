render({
  header: {
    name: '吕哲扬',
    slogan: '',
    age: 20,
    avatar: 'imgs/avatar.png',
    address: '江西省上饶市',
    mobile: '18292876059',
    email: '18292876059@163.com',
    website: 'http://lvzheyang.top',
    github: 'https://github.com/ensorrow/'
  },
  aside: [
    {
      title: '职业技能',
      content: [
        '熟练掌握HTML, CSS, JavaScript',
        '熟练运用React, Vue, 微信小程序等MVVM框架',
        '熟练运用jQuery, BootStrap',
        '熟悉Node.js开发'
      ]
    },
    {
      title: '技能证书',
      content: [
        'CET-6(570分)',
        'C语言二级证书',
        'MS Office二级证书(优秀)',
        'Photoshop一级证书'
      ]
    },
    {
      title: '个人评价',
      content: ['  热爱编程，在校期间主动参与开发了大量项目，React、Vue等多种主流前端MVVM框架均有实际项目经验。喜欢通过写博客来进行深入的学习和总结。','  较好的沟通能力和一定的管理经验，担任社团主管与创业团队技术总负责人期间充分锻炼了自己的软实力，一定程度上能够主导项目开发、组织大小活动。在网易实习期间，与组内师兄师姐相处融洽，并受到过项目组内其他成员好评。','  学习能力较强，本科阶段一直能够坚持双线发展，在努力成为一名合格开发者的同时学好本专业，大一大二大三学年综排专业前20%。喜欢读书，空闲时间阅读过大量文学作品。英语水平较好，能够较流畅的阅读英文文档，看一般的英文视频。']
    }
  ],
  main: [
    {
      title: '教育经历',
      content: [
        {
          timeRange: '2014.09至今',
          place: '西安交通大学',
          remark: '过程装备与控制工程'
        }
      ]
    },
    {
      title: '实习经验',
      content: [
        {
          timeRange: '2017.07至今',
          place: '西安交通大学网安实验室',
          remark: 'iMiss小组实习生',
          introduction: '大三暑假进入网安实验室互联网与移动系统小组实习，初步接触机器学习在文本分类领域的应用，目前主要负责数据集爬取，测试集标定等相关工作'
        },
        {
          timeRange: '2016.07-2016.09',
          place: '网易杭州研究院',
          remark: '前端开发实习生',
          introduction: '在大二时通过筛选成为网易2016年春招实习生，暑假期间在网易杭州研究院-前端技术部-前端支持组实习，实习期间主要完成了网易蜂巢旧ICP备案系统的维护及新ICP备案系统(icp.c.163.com)的上线'
        }
      ]
    },
    {
      title: '校内实践',
      content: [
        {
          timeRange: '2016.05-2017.05',
          place: 'e瞳网（社团）',
          remark: '前端主管',
          introduction: '负责e瞳网各项目前端部分的更新维护、任务调度，招纳培养新人实现技术传承；负责部门日常例会、培训，致力于提升交大整体的前端水平。'
        },
        {
          timeRange: '2015.03-2016.05',
          place: '西安映射网络科技公司（创业）',
          remark: '技术总负责人',
          introduction: '创业团队第一批合伙人，负责公司产品开发的前端部分，包括移动端（教师端和学生端）和PC端（公司主页，管理系统）;负责团队开发人员的招募、培训与管理调度。'
        }
      ]
    },
    {
      title: '项目经验',
      content: [
        {
          timeRange: '2017.07-2017.08',
          place: '测试集标定系统 & flickr数据集爬虫',
          introduction: '为分类器的测试集校正过程提供GUI：测试集为结构化文本数据，将其存入数据库后使用Node.js提供API，前端使用Ajax进行数据交互，处理完成后再写入文件；使用Python爬取Flickr上的用户信息及图片：根据预设用户使用广度搜索获取信息，在异常中断后将用户队列序列化写入文件保证记录已爬取信息，使用多线程进行图片的下载，设置错误重连，稳定爬取图片10w+'
        },
        {
          timeRange: '2017.03-2017.04',
          place: 'Gotcha（搞事）移动端WebApp',
          remark: '',
          introduction: '商业外包项目，主要业务为活动的展示与报名，项目使用react搭建，采用redux架构，实践了页面容器与组件的分离及组件的纯UI化，应用css模块化及移动端自适应布局，应用Promise和async函数'
        },
        {
          timeRange: '2016.08-2016.09',
          place: '网易蜂巢ICP备案系统',
          remark: '',
          introduction: '实习初期负责对旧ICP备案系统(使用React搭建)进行功能维护 (修复了大部分旧系统的BUG)和样式更新;后在导师指导下，使用网易MVVM框架Regular全新搭建了新的备案系统并上线，基本实现了数据驱动与组件化的要求，获得了项目组其他成员的认可'
        }
      ]
    }
  ]
});