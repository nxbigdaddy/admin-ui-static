// 菜单配置 - 完整的后台管理系统菜单
const MENU_CONFIG = [
    {
        key: 'dashboard',
        title: '高管驾驶舱',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
        type: 'item'
    },
    {
        key: 'data-integration',
        title: '数据集成',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
        type: 'group',
        children: [
            { key: 'data-source', title: '数据源管理', icon: '' },
            { key: 'sync-task', title: '同步任务', icon: '' },
            { key: 'data-cleaning', title: '数据清洗', icon: '' }
        ]
    },
    {
        key: 'data-storage',
        title: '数据存储',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
        type: 'group',
        children: [
            { key: 'storage-layer', title: '存储分层管理', icon: '' },
            { key: 'data-model', title: '数据模型设计', icon: '' },
            { key: 'table-manage', title: '表结构管理', icon: '' }
        ]
    },
    {
        key: 'data-governance',
        title: '数据治理',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        type: 'group',
        children: [
            { key: 'master-data', title: '主数据管理', icon: '' },
            { key: 'data-quality', title: '数据质量', icon: '' },
            { key: 'metadata', title: '元数据', icon: '' },
            { key: 'data-security', title: '数据安全', icon: '' }
        ]
    },
    {
        key: 'data-service',
        title: '数据服务',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        type: 'item'
    },
    {
        key: 'data-analysis',
        title: '数据分析',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
        type: 'group',
        children: [
            { key: 'report-designer', title: '报表设计器', icon: '' },
            { key: 'bi-report', title: 'BI 报表', icon: '' },
            { key: 'nl2sql', title: 'NL2SQL', icon: '' },
            { key: 'ai-analysis', title: 'AI 分析', icon: '' }
        ]
    },
    {
        key: 'business-app',
        title: '业务应用',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        type: 'group',
        children: [
            { key: 'production-plan', title: '生产计划', icon: '' },
            { key: 'sales-crm', title: '销售 CRM', icon: '' },
            { key: 'quality-scm', title: '质量与供应链', icon: '' }
        ]
    },
    {
        key: 'system-management',
        title: '系统管理',
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
        type: 'group',
        children: [
            { key: 'user-management', title: '用户管理', icon: '' },
            { key: 'role-permission', title: '角色权限', icon: '' },
            { key: 'system-monitor', title: '系统监控', icon: '' },
            { key: 'log-management', title: '日志管理', icon: '' }
        ]
    }
];
