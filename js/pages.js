// 所有页面的内容生成函数
window.PAGE_CONTENT = function(pageKey) {
    const pages = {
        'dashboard': getDashboardContent,
        'data-source': getDataSourceContent,
        'sync-task': getSyncTaskContent,
        'data-cleaning': getDataCleaningContent,
        'storage-layer': getStorageLayerContent,
        'data-model': getDataModelContent,
        'table-manage': getTableManageContent,
        'master-data': getMasterDataContent,
        'data-quality': getDataQualityContent,
        'metadata': getMetadataContent,
        'data-security': getDataSecurityContent,
        'data-service': getDataServiceContent,
        'report-designer': getReportDesignerContent,
        'bi-report': getBIReportContent,
        'nl2sql': getNL2SQLContent,
        'ai-analysis': getAIAnalysisContent,
        'production-plan': getProductionPlanContent,
        'sales-crm': getSalesCRMContent,
        'quality-scm': getQualitySCMContent,
        'user-management': getUserManagementContent,
        'role-permission': getRolePermissionContent,
        'system-monitor': getSystemMonitorContent,
        'log-management': getLogManagementContent
    };
    
    return pages[pageKey] ? pages[pageKey]() : '<h2>页面开发中...</h2>';
};

// 1. 高管驾驶舱
function getDashboardContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">高管驾驶舱</h1>
            <p class="page-desc">实时掌握企业运营状况，智能决策支持</p>
        </div>
        
        <!-- KPI 卡片 -->
        <div class="row mb-3">
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="flex-between mb-2">
                            <span class="text-secondary">今日销售额</span>
                            <span class="text-primary" style="font-size: 24px;">💰</span>
                        </div>
                        <div style="font-size: 28px; font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">¥1,286,450</div>
                        <div class="text-success">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                            较昨日 +12.5%
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="flex-between mb-2">
                            <span class="text-secondary">本月订单数</span>
                            <span style="font-size: 24px;">📦</span>
                        </div>
                        <div style="font-size: 28px; font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">8,592</div>
                        <div class="text-success">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                            较上月 +8.3%
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="flex-between mb-2">
                            <span class="text-secondary">库存周转率</span>
                            <span style="font-size: 24px;">📊</span>
                        </div>
                        <div style="font-size: 28px; font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">6.8 次</div>
                        <div class="text-secondary">与上周持平</div>
                    </div>
                </div>
            </div>
            
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="flex-between mb-2">
                            <span class="text-secondary">产品合格率</span>
                            <span style="font-size: 24px;">✓</span>
                        </div>
                        <div style="font-size: 28px; font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">99.2%</div>
                        <div class="text-success">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                            较昨日 +0.3%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 图表和预警 -->
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>销售趋势分析</h3>
                        <select class="form-control" style="width: auto;">
                            <option>最近 7 天</option>
                            <option>最近 30 天</option>
                            <option>最近 90 天</option>
                        </select>
                    </div>
                    <div class="card-body">
                        <div style="height: 300px; background: #f5f7fa; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999;">
                            📈 销售趋势图表区域（集成 ECharts）
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>预警中心</h3>
                        <a href="#" class="text-primary">查看全部</a>
                    </div>
                    <div class="card-body">
                        <div class="alert-item" style="padding: 12px; border-left: 3px solid #ff4d4f; background: #fff1f0; margin-bottom: 12px; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">⚠️ 库存预警 - A 类物料不足</div>
                            <div style="font-size: 12px; color: #666;">物料 M001234，当前库存：50</div>
                            <div style="font-size: 12px; color: #999; margin-top: 4px;">10 分钟前</div>
                        </div>
                        
                        <div class="alert-item" style="padding: 12px; border-left: 3px solid #faad14; background: #fffbe6; margin-bottom: 12px; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">⚠️ 质量异常 - 不合格品率上升</div>
                            <div style="font-size: 12px; color: #666;">Line-3，不合格率：2.1%</div>
                            <div style="font-size: 12px; color: #999; margin-top: 4px;">1 小时前</div>
                        </div>
                        
                        <div class="alert-item" style="padding: 12px; border-left: 3px solid #faad14; background: #fffbe6; margin-bottom: 12px; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">⚠️ 设备温度异常</div>
                            <div style="font-size: 12px; color: #666;">SCADA-003，85°C</div>
                            <div style="font-size: 12px; color: #999; margin-top: 4px;">2 小时前</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 2. 数据源管理
function getDataSourceContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">数据源管理</h1>
            <p class="page-desc">配置和管理各类数据源连接</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="showModal('addDataSourceModal')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    新增数据源
                </button>
                <button class="btn btn-default" onclick="testConnection()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                    测试连接
                </button>
            </div>
            <div class="toolbar-right">
                <div class="search-box">
                    <input type="text" placeholder="搜索数据源...">
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th><input type="checkbox"></th>
                            <th>数据源名称</th>
                            <th>类型</th>
                            <th>连接地址</th>
                            <th>数据库名</th>
                            <th>状态</th>
                            <th>最后同步时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>U8_ERP_Prod</td>
                            <td><span class="badge badge-primary">SQL Server</span></td>
                            <td>203.0.113.10:1433</td>
                            <td>U8DB</td>
                            <td><span class="badge badge-success">正常</span></td>
                            <td>2026-03-19 10:30:00</td>
                            <td>
                                <button class="btn btn-sm btn-primary" onclick="editDataSource(1)">编辑</button>
                                <button class="btn btn-sm btn-danger" onclick="deleteDataSource(1)">删除</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>CRM_MySQL</td>
                            <td><span class="badge badge-info">MySQL</span></td>
                            <td>203.0.113.10:3306</td>
                            <td>CRM_DB</td>
                            <td><span class="badge badge-success">正常</span></td>
                            <td>2026-03-19 10:25:00</td>
                            <td>
                                <button class="btn btn-sm btn-primary" onclick="editDataSource(2)">编辑</button>
                                <button class="btn btn-sm btn-danger" onclick="deleteDataSource(2)">删除</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>SCADA_InfluxDB</td>
                            <td><span class="badge badge-warning">InfluxDB</span></td>
                            <td>203.0.113.10:8086</td>
                            <td>device_data</td>
                            <td><span class="badge badge-warning">延迟</span></td>
                            <td>2026-03-19 10:20:00</td>
                            <td>
                                <button class="btn btn-sm btn-primary" onclick="editDataSource(3)">编辑</button>
                                <button class="btn btn-sm btn-danger" onclick="deleteDataSource(3)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="card-footer">
                <div class="flex-between">
                    <div class="text-secondary">共 3 条记录</div>
                    <div class="pagination">
                        <button disabled>&lt;</button>
                        <button class="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 新增/编辑数据源模态框 -->
        <div id="addDataSourceModal" class="modal" style="display: none;">
            <div class="modal-dialog" style="max-width: 600px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>新增数据源</h3>
                        <button class="close-btn" onclick="closeModal('addDataSourceModal')">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="dataSourceForm">
                            <div class="form-group">
                                <label>数据源名称 *</label>
                                <input type="text" class="form-control" required placeholder="请输入数据源名称">
                            </div>
                            <div class="form-group">
                                <label>数据源类型 *</label>
                                <select class="form-control" required>
                                    <option value="">请选择类型</option>
                                    <option>SQL Server</option>
                                    <option>MySQL</option>
                                    <option>Oracle</option>
                                    <option>PostgreSQL</option>
                                    <option>InfluxDB</option>
                                    <option>MongoDB</option>
                                </select>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-group">
                                        <label>主机地址 *</label>
                                        <input type="text" class="form-control" required placeholder="IP 地址或主机名">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>端口 *</label>
                                        <input type="number" class="form-control" required placeholder="1433">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>数据库名</label>
                                <input type="text" class="form-control" placeholder="可选">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>用户名</label>
                                        <input type="text" class="form-control" placeholder="sa">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>密码</label>
                                        <input type="password" class="YOUR_PASSWORD" placeholder="******">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>描述</label>
                                <textarea class="form-control" rows="3" placeholder="数据源描述信息"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" onclick="closeModal('addDataSourceModal')">取消</button>
                        <button class="btn btn-primary" onclick="saveDataSource()">保存</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 由于篇幅限制，这里只展示了 2 个完整的页面内容。
// 实际项目中需要为所有 23 个模块创建类似的详细页面。
// 让我继续创建其他页面的简化版本框架...

// 3. 同步任务管理 - 完整页面
function getSyncTaskContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">同步任务管理</h1>
            <p class="page-desc">配置和执行数据同步任务</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="showAddSyncModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    新建任务
                </button>
                <button class="btn btn-success" onclick="batchStart()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    批量启动
                </button>
                <button class="btn btn-warning" onclick="batchStop()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    </svg>
                    批量暂停
                </button>
            </div>
            <div class="toolbar-right">
                <div class="search-box">
                    <input type="text" placeholder="搜索任务...">
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="selectAll"></th>
                            <th>任务名称</th>
                            <th>源数据源</th>
                            <th>目标数据源</th>
                            <th>同步方式</th>
                            <th>调度策略</th>
                            <th>状态</th>
                            <th>进度</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>ERP 物料数据同步</td>
                            <td>U8_ERP_Prod</td>
                            <td>DWD_Material</td>
                            <td><span class="badge badge-info">CDC 实时</span></td>
                            <td>持续同步</td>
                            <td><span class="badge badge-success">运行中</span></td>
                            <td>
                                <div class="progress-bar" style="width: 100px; margin: 0 auto;">
                                    <div class="progress-fill" style="width: 100%;"></div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-warning" onclick="stopTask(1)">暂停</button>
                                <button class="btn btn-sm btn-default" onclick="viewLog(1)">日志</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>CRM 客户数据同步</td>
                            <td>CRM_MySQL</td>
                            <td>DWD_Customer</td>
                            <td><span class="badge badge-primary">定时全量</span></td>
                            <td>每天 02:00</td>
                            <td><span class="badge badge-info">等待中</span></td>
                            <td>
                                <div class="progress-bar" style="width: 100px; margin: 0 auto;">
                                    <div class="progress-fill" style="width: 0%;"></div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-success" onclick="startTask(2)">立即执行</button>
                                <button class="btn btn-sm btn-default" onclick="viewLog(2)">日志</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>SCADA 设备数据采集</td>
                            <td>SCADA_InfluxDB</td>
                            <td>ODS_Equipment</td>
                            <td><span class="badge badge-info">实时流</span></td>
                            <td>持续同步</td>
                            <td><span class="badge badge-success">运行中</span></td>
                            <td>
                                <div class="progress-bar" style="width: 100px; margin: 0 auto;">
                                    <div class="progress-fill" style="width: 100%;"></div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-warning" onclick="stopTask(3)">暂停</button>
                                <button class="btn btn-sm btn-default" onclick="viewLog(3)">日志</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="card-footer">
                <div class="flex-between">
                    <div class="text-secondary">共 3 条记录</div>
                    <div class="pagination">
                        <button disabled>&lt;</button>
                        <button class="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 4. 数据清洗 - 完整页面
function getDataCleaningContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">数据清洗</h1>
            <p class="page-desc">配置数据转换和清洗规则</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="showAddRuleModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    新增清洗规则
                </button>
            </div>
        </div>
        
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>清洗规则列表</h3>
                    </div>
                    <div class="card-body" style="padding: 0;">
                        <ul class="nav-menu" style="padding: 0;">
                            <li class="nav-item active">
                                <a href="javascript:void(0)" class="nav-link" style="color: var(--text-primary);">
                                    <span class="nav-text">去重处理</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" style="color: var(--text-primary);">
                                    <span class="nav-text">空值填充</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" style="color: var(--text-primary);">
                                    <span class="nav-text">异常值检测</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" style="color: var(--text-primary);">
                                    <span class="nav-text">数据标准化</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>去重处理规则</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label>规则名称</label>
                                <input type="text" class="form-control" value="物料数据去重">
                            </div>
                            <div class="form-group">
                                <label>应用表</label>
                                <select class="form-control">
                                    <option>DWD_Material</option>
                                    <option>DWD_Customer</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>去重字段</label>
                                <input type="text" class="form-control" value="material_code,material_name">
                                <small class="text-secondary">多个字段用逗号分隔</small>
                            </div>
                            <div class="form-group">
                                <label>去重策略</label>
                                <select class="form-control">
                                    <option>保留第一条</option>
                                    <option>保留最后一条</option>
                                    <option>保留最新时间</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>执行频率</label>
                                <select class="form-control">
                                    <option>实时</option>
                                    <option>每小时</option>
                                    <option>每天</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">保存规则</button>
                        <button class="btn btn-default">测试运行</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// 5. 存储分层管理 - 完整页面
function getStorageLayerContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">存储分层管理</h1>
            <p class="page-desc">管理 ODS、DWD、DWS、ADS 四层数据存储</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-3">
                <div class="card kpi-card" style="border-left: 4px solid #1890ff;">
                    <div class="card-body">
                        <div class="text-secondary mb-2">ODS 层（原始数据）</div>
                        <div style="font-size: 24px; font-weight: 600;">156 张表</div>
                        <div class="text-secondary" style="font-size: 13px;">数据量：2.3TB</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card" style="border-left: 4px solid #52c41a;">
                    <div class="card-body">
                        <div class="text-secondary mb-2">DWD 层（明细数据）</div>
                        <div style="font-size: 24px; font-weight: 600;">89 张表</div>
                        <div class="text-secondary" style="font-size: 13px;">数据量：1.8TB</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card" style="border-left: 4px solid #faad14;">
                    <div class="card-body">
                        <div class="text-secondary mb-2">DWS 层（汇总数据）</div>
                        <div style="font-size: 24px; font-weight: 600;">45 张表</div>
                        <div class="text-secondary" style="font-size: 13px;">数据量：567GB</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card" style="border-left: 4px solid #ff4d4f;">
                    <div class="card-body">
                        <div class="text-secondary mb-2">ADS 层（应用数据）</div>
                        <div style="font-size: 24px; font-weight: 600;">32 张表</div>
                        <div class="text-secondary" style="font-size: 13px;">数据量：234GB</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>存储分层详情</h3>
                <div class="btn-group">
                    <button class="btn btn-sm btn-primary" onclick="addTable()">新增表</button>
                    <button class="btn btn-sm btn-default" onclick="refreshStats()">刷新统计</button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>分层</th>
                            <th>表名</th>
                            <th>中文名</th>
                            <th>记录数</th>
                            <th>存储大小</th>
                            <th>更新时间</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="badge badge-primary">ODS</span></td>
                            <td>ods_material_info</td>
                            <td>物料信息表</td>
                            <td>1,234,567</td>
                            <td>45.6GB</td>
                            <td>2026-03-19 10:30</td>
                            <td><span class="badge badge-success">正常</span></td>
                        </tr>
                        <tr>
                            <td><span class="badge badge-success">DWD</span></td>
                            <td>dwd_sales_detail</td>
                            <td>销售明细表</td>
                            <td>5,678,901</td>
                            <td>123.4GB</td>
                            <td>2026-03-19 09:00</td>
                            <td><span class="badge badge-success">正常</span></td>
                        </tr>
                        <tr>
                            <td><span class="badge badge-warning">DWS</span></td>
                            <td>dws_sales_monthly</td>
                            <td>销售月汇总表</td>
                            <td>123,456</td>
                            <td>12.3GB</td>
                            <td>2026-03-19 01:00</td>
                            <td><span class="badge badge-success">正常</span></td>
                        </tr>
                        <tr>
                            <td><span class="badge badge-danger">ADS</span></td>
                            <td>ads_executive_dashboard</td>
                            <td>高管驾驶舱数据表</td>
                            <td>1,234</td>
                            <td>2.1GB</td>
                            <td>2026-03-19 10:00</td>
                            <td><span class="badge badge-success">正常</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 6. 数据模型设计 - 完整页面
function getDataModelContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">数据模型设计</h1>
            <p class="page-desc">设计和管理数据模型（星型模型、雪花模型）</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="createNewModel()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    新建模型
                </button>
                <button class="btn btn-default" onclick="importModel()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    导入模型
                </button>
            </div>
        </div>
        
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>模型列表</h3>
                    </div>
                    <div class="card-body">
                        <div class="model-item" style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px; cursor: pointer; background: #f5f5f5;">
                            <div style="font-weight: 500; margin-bottom: 4px;">📊 销售分析模型</div>
                            <div style="font-size: 12px; color: #666;">星型模型 · 8 张表</div>
                        </div>
                        <div class="model-item" style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px; cursor: pointer;">
                            <div style="font-weight: 500; margin-bottom: 4px;">📈 库存分析模型</div>
                            <div style="font-size: 12px; color: #666;">雪花模型 · 6 张表</div>
                        </div>
                        <div class="model-item" style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px; cursor: pointer;">
                            <div style="font-weight: 500; margin-bottom: 4px;">💰 财务分析模型</div>
                            <div style="font-size: 12px; color: #666;">星型模型 · 5 张表</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>销售分析模型 - 事实表</h3>
                    </div>
                    <div class="card-body">
                        <div style="height: 400px; background: #f5f7fa; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            <div style="text-align: center;">
                                <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
                                <div style="font-weight: 500; margin-bottom: 8px;">事实表：fact_sales</div>
                                <div style="font-size: 13px; color: #666;">维度表：dim_product, dim_customer, dim_time</div>
                                <div style="margin-top: 16px;">
                                    <button class="btn btn-sm btn-primary">查看 ER 图</button>
                                    <button class="btn btn-sm btn-default">编辑模型</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="flex-between">
                            <div>创建时间：2026-03-15</div>
                            <div>最后更新：2026-03-19 09:30</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// 7. 表结构管理 - 完整页面
function getTableManageContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">表结构管理</h1>
            <p class="page-desc">查看和管理数据库表结构</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <div class="search-box">
                    <input type="text" placeholder="搜索表名...">
                </div>
            </div>
            <div class="toolbar-right">
                <button class="btn btn-primary" onclick="createTable()">创建新表</button>
            </div>
        </div>
        
        <div class="card">
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>表名</th>
                            <th>中文名</th>
                            <th>分层</th>
                            <th>字段数</th>
                            <th>记录数</th>
                            <th>存储大小</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dwd_material_info</td>
                            <td>物料信息表</td>
                            <td><span class="badge badge-success">DWD</span></td>
                            <td>25</td>
                            <td>1,234,567</td>
                            <td>45.6GB</td>
                            <td>2026-03-19 10:30</td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="viewStructure(1)">查看结构</button>
                                <button class="btn btn-sm btn-default" onclick="editTable(1)">编辑</button>
                            </td>
                        </tr>
                        <tr>
                            <td>dwd_sales_detail</td>
                            <td>销售明细表</td>
                            <td><span class="badge badge-success">DWD</span></td>
                            <td>32</td>
                            <td>5,678,901</td>
                            <td>123.4GB</td>
                            <td>2026-03-19 09:00</td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="viewStructure(2)">查看结构</button>
                                <button class="btn btn-sm btn-default" onclick="editTable(2)">编辑</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 8. 主数据管理 - 完整页面
function getMasterDataContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">主数据管理</h1>
            <p class="page-desc">统一管理物料、客户、供应商等主数据</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showMasterData('material')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">📦</div>
                        <h3>物料主数据</h3>
                        <p class="text-secondary">12,345 条记录</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showMasterData('customer')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">👥</div>
                        <h3>客户主数据</h3>
                        <p class="text-secondary">3,456 条记录</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showMasterData('supplier')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">🏪</div>
                        <h3>供应商主数据</h3>
                        <p class="text-secondary">567 条记录</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showMasterData('organization')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">🏢</div>
                        <h3>组织主数据</h3>
                        <p class="text-secondary">234 条记录</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>物料主数据列表</h3>
                <div class="btn-group">
                    <button class="btn btn-sm btn-primary" onclick="addMaterial()">新增物料</button>
                    <button class="btn btn-sm btn-default" onclick="importMaterial()">导入</button>
                    <button class="btn btn-sm btn-default" onclick="exportMaterial()">导出</button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>物料编码</th>
                            <th>物料名称</th>
                            <th>规格型号</th>
                            <th>计量单位</th>
                            <th>物料分类</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>M001234</td>
                            <td>钢板 A 级</td>
                            <td>10mm×1000mm×2000mm</td>
                            <td>张</td>
                            <td>原材料</td>
                            <td><span class="badge badge-success">启用</span></td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="editMaterial(1)">编辑</button>
                                <button class="btn btn-sm btn-default" onclick="viewMaterial(1)">查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>M001235</td>
                            <td>螺丝 M6</td>
                            <td>M6×20</td>
                            <td>个</td>
                            <td>标准件</td>
                            <td><span class="badge badge-success">启用</span></td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="editMaterial(2)">编辑</button>
                                <button class="btn btn-sm btn-default" onclick="viewMaterial(2)">查看</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
// 9. 数据质量管理 - 完整页面
function getDataQualityContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">数据质量管理</h1>
            <p class="page-desc">监控和提升数据质量</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">整体质量评分</div>
                        <div style="font-size: 36px; font-weight: 600; color: #52c41a;">92.5</div>
                        <div class="text-success">↑ 较昨日 +0.3</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">问题数据总数</div>
                        <div style="font-size: 36px; font-weight: 600; color: #ff4d4f;">1,234</div>
                        <div class="text-danger">↓ 较昨日 -56</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">今日检查记录</div>
                        <div style="font-size: 36px; font-weight: 600;">56,789</div>
                        <div class="text-secondary">覆盖率 98%</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">待处理问题</div>
                        <div style="font-size: 36px; font-weight: 600; color: #faad14;">45</div>
                        <div class="text-warning">需及时处理</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>质量问题分布</h3>
                    </div>
                    <div class="card-body">
                        <div style="height: 300px; background: #f5f7fa; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            📊 质量问题图表区域（集成 ECharts）
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>质量规则</h3>
                        <button class="btn btn-sm btn-primary" onclick="addRule()">新增</button>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">完整性检查</div>
                            <div style="font-size: 12px; color: #666;">必填字段验证</div>
                            <div style="margin-top: 8px;"><span class="badge badge-success">运行中</span></div>
                        </div>
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">一致性检查</div>
                            <div style="font-size: 12px; color: #666;">跨表数据一致性</div>
                            <div style="margin-top: 8px;"><span class="badge badge-success">运行中</span></div>
                        </div>
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">准确性检查</div>
                            <div style="font-size: 12px; color: #666;">数值范围验证</div>
                            <div style="margin-top: 8px;"><span class="badge badge-warning">已暂停</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 10. 元数据管理 - 完整页面
function getMetadataContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">元数据管理</h1>
            <p class="page-desc">管理技术元数据和业务元数据</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="collectMetadata()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                    采集元数据
                </button>
            </div>
            <div class="toolbar-right">
                <div class="search-box">
                    <input type="text" placeholder="搜索表、字段...">
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>元数据目录</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label>数据源</label>
                            <select class="form-control">
                                <option>全部</option>
                                <option>U8_ERP_Prod</option>
                                <option>CRM_MySQL</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label>分层</label>
                            <select class="form-control">
                                <option>全部</option>
                                <option>ODS</option>
                                <option>DWD</option>
                                <option>DWS</option>
                                <option>ADS</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary btn-block">查询</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>表名</th>
                            <th>中文名</th>
                            <th>字段数</th>
                            <th>描述</th>
                            <th>负责人</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dwd_material_info</td>
                            <td>物料信息表</td>
                            <td>25</td>
                            <td>存储物料基础信息</td>
                            <td>张三</td>
                            <td>2026-03-19</td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="viewMetadata(1)">详情</button>
                                <button class="btn btn-sm btn-default" onclick="viewLineage(1)">血缘</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
// 11. 数据安全管理 - 完整页面
function getDataSecurityContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">数据安全管理</h1>
            <p class="page-desc">数据加密、脱敏和权限控制</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>🔐 数据加密</h3>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">传输加密</div>
                            <div style="font-size: 13px; color: #666; margin-bottom: 8px;">SSL/TLS 加密传输</div>
                            <span class="badge badge-success">已启用</span>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">存储加密</div>
                            <div style="font-size: 13px; color: #666; margin-bottom: 8px;">TDE 透明数据加密</div>
                            <span class="badge badge-success">已启用</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-sm btn-primary" onclick="configEncryption()">配置</button>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>🎭 数据脱敏</h3>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">静态脱敏</div>
                            <div style="font-size: 13px; color: #666;">生产数据脱敏到测试环境</div>
                            <div style="margin-top: 8px;"><span class="badge badge-success">运行中</span></div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">动态脱敏</div>
                            <div style="font-size: 13px; color: #666;">基于角色的实时脱敏</div>
                            <div style="margin-top: 8px;"><span class="badge badge-success">运行中</span></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-sm btn-primary" onclick="configMasking()">配置</button>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>👮 访问控制</h3>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">RBAC 权限</div>
                            <div style="font-size: 13px; color: #666;">基于角色的访问控制</div>
                            <div style="margin-top: 8px;"><span class="badge badge-success">已启用</span></div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">行级权限</div>
                            <div style="font-size: 13px; color: #666;">数据行级别权限控制</div>
                            <div style="margin-top: 8px;"><span class="badge badge-success">已启用</span></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-sm btn-primary" onclick="configPermission()">配置</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 12. 数据服务 - 完整页面
function getDataServiceContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">数据服务</h1>
            <p class="page-desc">API 网关和数据服务编排</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="createAPI()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    创建 API
                </button>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>API 列表</h3>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>API 名称</th>
                            <th>路径</th>
                            <th>方法</th>
                            <th>调用次数</th>
                            <th>平均响应</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>获取物料信息</td>
                            <td>/api/v1/material/{id}</td>
                            <td><span class="badge badge-info">GET</span></td>
                            <td>12,345</td>
                            <td>45ms</td>
                            <td><span class="badge badge-success">已发布</span></td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="testAPI(1)">测试</button>
                                <button class="btn btn-sm btn-default" onclick="editAPI(1)">编辑</button>
                            </td>
                        </tr>
                        <tr>
                            <td>查询销售数据</td>
                            <td>/api/v1/sales/query</td>
                            <td><span class="badge badge-warning">POST</span></td>
                            <td>8,901</td>
                            <td>120ms</td>
                            <td><span class="badge badge-success">已发布</span></td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="testAPI(2)">测试</button>
                                <button class="btn btn-sm btn-default" onclick="editAPI(2)">编辑</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
// 13. 报表设计器 - 完整页面
function getReportDesignerContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">报表设计器</h1>
            <p class="page-desc">低代码报表设计工具</p>
        </div>
        
        <div class="row" style="height: calc(100vh - 200px);">
            <div class="col-3">
                <div class="card" style="height: 100%;">
                    <div class="card-header">
                        <h3>组件库</h3>
                    </div>
                    <div class="card-body" style="overflow-y: auto;">
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: move;">
                            <div style="font-weight: 500;">📊 表格</div>
                            <div style="font-size: 12px; color: #666;">数据表格组件</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: move;">
                            <div style="font-weight: 500;">📈 柱状图</div>
                            <div style="font-size: 12px; color: #666;">柱状统计图</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: move;">
                            <div style="font-weight: 500;">🍩 饼图</div>
                            <div style="font-size: 12px; color: #666;">饼状分布图</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: move;">
                            <div style="font-weight: 500;">📉 折线图</div>
                            <div style="font-size: 12px; color: #666;">趋势折线图</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: move;">
                            <div style="font-weight: 500;">🎯 KPI 卡片</div>
                            <div style="font-size: 12px; color: #666;">指标展示卡片</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-6">
                <div class="card" style="height: 100%;">
                    <div class="card-header">
                        <h3>设计画布</h3>
                        <div class="btn-group">
                            <button class="btn btn-sm btn-primary" onclick="saveReport()">保存</button>
                            <button class="btn btn-sm btn-default" onclick="previewReport()">预览</button>
                        </div>
                    </div>
                    <div class="card-body" style="background: #f0f2f5;">
                        <div style="background: white; min-height: 400px; border-radius: 4px; padding: 20px;">
                            <div style="text-align: center; color: #999; padding: 60px 20px;">
                                <div style="font-size: 48px; margin-bottom: 16px;">🎨</div>
                                <div>拖拽组件到此处设计报表</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-3">
                <div class="card" style="height: 100%;">
                    <div class="card-header">
                        <h3>属性配置</h3>
                    </div>
                    <div class="card-body" style="overflow-y: auto;">
                        <div class="form-group">
                            <label>报表名称</label>
                            <input type="text" class="form-control" value="销售分析报表">
                        </div>
                        <div class="form-group">
                            <label>数据源</label>
                            <select class="form-control">
                                <option>dwd_sales_detail</option>
                                <option>dws_sales_monthly</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>刷新频率</label>
                            <select class="form-control">
                                <option>实时</option>
                                <option>每小时</option>
                                <option>每天</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 14. BI 报表 - 完整页面
function getBIReportContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">BI 报表</h1>
            <p class="page-desc">商业智能分析报表</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="createReport()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    新建报表
                </button>
            </div>
        </div>
        
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div style="font-size: 32px; margin-bottom: 16px;">📊</div>
                        <h3>销售分析报表</h3>
                        <p class="text-secondary">包含销售额、订单数等指标</p>
                        <div class="flex-between mt-3">
                            <span class="badge badge-success">已发布</span>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-default" onclick="viewReport(1)">查看</button>
                                <button class="btn btn-sm btn-default" onclick="editReport(1)">编辑</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div style="font-size: 32px; margin-bottom: 16px;">📈</div>
                        <h3>库存分析报表</h3>
                        <p class="text-secondary">库存周转、库龄分析</p>
                        <div class="flex-between mt-3">
                            <span class="badge badge-success">已发布</span>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-default" onclick="viewReport(2)">查看</button>
                                <button class="btn btn-sm btn-default" onclick="editReport(2)">编辑</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div style="font-size: 32px; margin-bottom: 16px;">💰</div>
                        <h3>财务分析报表</h3>
                        <p class="text-secondary">收入、成本、利润分析</p>
                        <div class="flex-between mt-3">
                            <span class="badge badge-info">草稿</span>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-default" onclick="viewReport(3)">查看</button>
                                <button class="btn btn-sm btn-default" onclick="editReport(3)">编辑</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// 15. NL2SQL 自然语言查询 - 完整页面
function getNL2SQLContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">NL2SQL 自然语言查询</h1>
            <p class="page-desc">用自然语言提问，AI 自动生成 SQL 查询</p>
        </div>
        
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>💬 智能问答</h3>
                    </div>
                    <div class="card-body">
                        <div style="border: 2px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                            <div class="form-group">
                                <label>请输入您的问题</label>
                                <textarea class="form-control" rows="3" placeholder="例如：显示上个月销售额前 10 的产品..." id="nlQuestion"></textarea>
                            </div>
                            <div class="flex-between">
                                <div>
                                    <button class="btn btn-primary" onclick="submitQuestion()">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                        提交问题
                                    </button>
                                    <button class="btn btn-default ml-2" onclick="clearQuestion()">清空</button>
                                </div>
                                <div class="text-secondary" style="font-size: 13px;">
                                    💡 提示：支持中文提问，自动转换为 SQL
                                </div>
                            </div>
                        </div>
                        
                        <div id="queryResult" style="display: none;">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h4>📝 生成的 SQL</h4>
                                </div>
                                <div class="card-body">
                                    <pre style="background: #f5f7fa; padding: 16px; border-radius: 4px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 13px;">SELECT product_name, SUM(sales_amount) as total_sales FROM dwd_sales_detail WHERE sale_date >= DATEADD(month, -1, GETDATE()) GROUP BY product_name ORDER BY total_sales DESC LIMIT 10;</pre>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-header">
                                    <h4>📊 查询结果</h4>
                                    <div class="btn-group">
                                        <button class="btn btn-sm btn-success" onclick="exportResult()">导出 Excel</button>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>排名</th>
                                                <th>产品名称</th>
                                                <th>销售金额</th>
                                                <th>订单数</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>产品 A</td>
                                                <td>¥1,234,567</td>
                                                <td>5,678</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>产品 B</td>
                                                <td>¥987,654</td>
                                                <td>4,321</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>📚 常用示例</h3>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: pointer;" onclick="useExample('显示本月销售额')">
                            <div style="font-weight: 500; margin-bottom: 4px;">📊 显示本月销售额</div>
                            <div style="font-size: 12px; color: #666;">查看本月销售情况</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: pointer;" onclick="useExample('查询库存最多的前 10 个产品')">
                            <div style="font-weight: 500; margin-bottom: 4px;">📦 查询库存最多的前 10 个产品</div>
                            <div style="font-size: 12px; color: #666;">库存排行查询</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: pointer;" onclick="useExample('统计每个客户的订单数量')">
                            <div style="font-weight: 500; margin-bottom: 4px;">👥 统计每个客户的订单数量</div>
                            <div style="font-size: 12px; color: #666;">客户订单统计</div>
                        </div>
                        <div style="padding: 12px; background: #f5f7fa; border-radius: 4px; margin-bottom: 12px; cursor: pointer;" onclick="useExample('显示不合格品率最高的生产线')">
                            <div style="font-weight: 500; margin-bottom: 4px;">⚠️ 显示不合格品率最高的生产线</div>
                            <div style="font-size: 12px; color: #666;">质量问题分析</div>
                        </div>
                    </div>
                </div>
                
                <div class="card mt-3">
                    <div class="card-header">
                        <h3>📖 知识库</h3>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">可用表</div>
                            <div style="font-size: 12px; color: #666;">
                                <span class="badge badge-primary">dwd_sales_detail</span>
                                <span class="badge badge-primary">dwd_material_info</span>
                                <span class="badge badge-primary">dwd_customer</span>
                            </div>
                        </div>
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">常用字段</div>
                            <div style="font-size: 12px; color: #666;">
                                sales_amount, order_count, product_name...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 16. AI 分析 - 完整页面
function getAIAnalysisContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">AI 分析</h1>
            <p class="page-desc">智能预测、异常检测和根因分析</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showAIModel('forecast')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">📈</div>
                        <h3>趋势预测</h3>
                        <p class="text-secondary">ARIMA、Prophet、LSTM</p>
                        <div class="mt-2"><span class="badge badge-success">运行中</span></div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showAIModel('anomaly')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
                        <h3>异常检测</h3>
                        <p class="text-secondary">离群点检测、时序异常</p>
                        <div class="mt-2"><span class="badge badge-success">运行中</span></div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showAIModel('recommend')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">💡</div>
                        <h3>智能推荐</h3>
                        <p class="text-secondary">协同过滤、内容推荐</p>
                        <div class="mt-2"><span class="badge badge-info">已训练</span></div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showAIModel('rootcause')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                        <h3>根因分析</h3>
                        <p class="text-secondary">自动归因、关联分析</p>
                        <div class="mt-2"><span class="badge badge-warning">待启动</span></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>📈 销售预测结果</h3>
                        <div class="btn-group">
                            <button class="btn btn-sm btn-primary" onclick="runForecast()">重新预测</button>
                            <button class="btn btn-sm btn-default" onclick="exportForecast()">导出</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div style="height: 350px; background: #f5f7fa; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            <div style="text-align: center;">
                                <div style="font-size: 64px; margin-bottom: 16px;">📊</div>
                                <div style="font-weight: 500;">销售预测图表区域</div>
                                <div style="font-size: 13px; color: #666; margin-top: 8px;">集成 ECharts 展示历史数据和预测趋势</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="flex-between">
                            <div>
                                <strong>下月预测销售额：</strong> <span class="text-primary" style="font-size: 20px; font-weight: 600;">¥2,345,678</span>
                            </div>
                            <div>
                                <span class="text-secondary">置信度：92% | 模型：Prophet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>⚠️ 异常检测结果</h3>
                    </div>
                    <div class="card-body">
                        <div class="alert-item" style="padding: 12px; border-left: 3px solid #ff4d4f; background: #fff1f0; margin-bottom: 12px; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">🔴 销售异常</div>
                            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">产品 C 销售额突降 65%</div>
                            <div style="font-size: 12px; color: #999;">检测到 2 小时前</div>
                        </div>
                        <div class="alert-item" style="padding: 12px; border-left: 3px solid #faad14; background: #fffbe6; margin-bottom: 12px; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">🟡 库存异常</div>
                            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">物料 M001 库存低于安全线</div>
                            <div style="font-size: 12px; color: #999;">检测到 5 小时前</div>
                        </div>
                        <div class="alert-item" style="padding: 12px; border-left: 3px solid #faad14; background: #fffbe6; margin-bottom: 12px; border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 4px;">🟡 质量异常</div>
                            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">Line-2 不合格率超标</div>
                            <div style="font-size: 12px; color: #999;">检测到 1 天前</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary btn-block" onclick="viewAllAnomalies()">查看全部异常</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// 17. 生产计划管理 - 完整页面
function getProductionPlanContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">生产计划管理</h1>
            <p class="page-desc">制定和跟踪生产计划</p>
        </div>
        
        <div class="toolbar">
            <div class="toolbar-left">
                <button class="btn btn-primary" onclick="createPlan()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    新建计划
                </button>
            </div>
            <div class="toolbar-right">
                <select class="form-control" style="width: 150px;">
                    <option>全部状态</option>
                    <option>待执行</option>
                    <option>进行中</option>
                    <option>已完成</option>
                </select>
            </div>
        </div>
        
        <div class="row mb-3">
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">本月计划产量</div>
                        <div style="font-size: 28px; font-weight: 600;">12,345 <span style="font-size: 14px; color: #666;">件</span></div>
                        <div class="progress-bar mt-2" style="height: 6px;">
                            <div class="progress-fill" style="width: 68%;"></div>
                        </div>
                        <div style="font-size: 12px; color: #666; margin-top: 4px;">完成率 68%</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">在产工单</div>
                        <div style="font-size: 28px; font-weight: 600;">23 <span style="font-size: 14px; color: #666;">个</span></div>
                        <div class="text-success mt-2">↑ 较上周 +3</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">计划达成率</div>
                        <div style="font-size: 28px; font-weight: 600; color: #52c41a;">95.6%</div>
                        <div class="text-success">↑ 较上月 +2.3%</div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card kpi-card">
                    <div class="card-body">
                        <div class="text-secondary mb-2">延期工单</div>
                        <div style="font-size: 28px; font-weight: 600; color: #ff4d4f;">2</div>
                        <div class="text-danger">需立即处理</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>生产工单列表</h3>
                <div class="btn-group">
                    <button class="btn btn-sm btn-default" onclick="exportPlan()">导出</button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>工单号</th>
                            <th>产品名称</th>
                            <th>计划数量</th>
                            <th>已完成</th>
                            <th>开始日期</th>
                            <th>截止日期</th>
                            <th>状态</th>
                            <th>进度</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MO20260319001</td>
                            <td>产品 A</td>
                            <td>1,000</td>
                            <td>680</td>
                            <td>2026-03-15</td>
                            <td>2026-03-25</td>
                            <td><span class="badge badge-success">生产中</span></td>
                            <td>
                                <div class="progress-bar" style="width: 100px; margin: 0 auto;">
                                    <div class="progress-fill" style="width: 68%;"></div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="viewPlan(1)">查看</button>
                                <button class="btn btn-sm btn-warning" onclick="adjustPlan(1)">调整</button>
                            </td>
                        </tr>
                        <tr>
                            <td>MO20260319002</td>
                            <td>产品 B</td>
                            <td>500</td>
                            <td>0</td>
                            <td>2026-03-20</td>
                            <td>2026-03-30</td>
                            <td><span class="badge badge-info">待执行</span></td>
                            <td>
                                <div class="progress-bar" style="width: 100px; margin: 0 auto;">
                                    <div class="progress-fill" style="width: 0%;"></div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-default" onclick="viewPlan(2)">查看</button>
                                <button class="btn btn-sm btn-success" onclick="startPlan(2)">开工</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// 18. 销售 CRM - 完整页面
function getSalesCRMContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">销售 CRM</h1>
            <p class="page-desc">客户关系管理和销售分析</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showCRMMoudle('customer')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">👥</div>
                        <h3>客户管理</h3>
                        <p class="text-secondary">3,456 个客户</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showCRMMoudle('opportunity')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">💼</div>
                        <h3>销售机会</h3>
                        <p class="text-secondary">567 个机会</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showCRMMoudle('order')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">📋</div>
                        <h3>订单管理</h3>
                        <p class="text-secondary">1,234 个订单</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="cursor: pointer;" onclick="showCRMMoudle('contract')">
                    <div class="card-body text-center">
                        <div style="font-size: 48px; margin-bottom: 16px;">📄</div>
                        <h3>合同管理</h3>
                        <p class="text-secondary">890 份合同</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>📊 销售业绩</h3>
                    </div>
                    <div class="card-body">
                        <div style="height: 300px; background: #f5f7fa; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            <div style="text-align: center;">
                                <div style="font-size: 64px; margin-bottom: 16px;">📈</div>
                                <div style="font-weight: 500;">销售业绩图表区域</div>
                                <div style="font-size: 13px; color: #666; margin-top: 8px;">展示月度销售趋势、团队排名等</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>🏆 销售排行榜</h3>
                    </div>
                    <div class="card-body">
                        <div style="padding: 12px; border-bottom: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 12px;">1</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">张三</div>
                                    <div style="font-size: 12px; color: #666;">华东区</div>
                                </div>
                                <div style="font-weight: 600; color: #faad14;">¥1,234,567</div>
                            </div>
                        </div>
                        <div style="padding: 12px; border-bottom: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #C0C0C0 0%, #808080 100%); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 12px;">2</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">李四</div>
                                    <div style="font-size: 12px; color: #666;">华南区</div>
                                </div>
                                <div style="font-weight: 600; color: #faad14;">¥987,654</div>
                            </div>
                        </div>
                        <div style="padding: 12px; border-bottom: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center;">
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #CD7F32 0%, #8B4513 100%); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; margin-right: 12px;">3</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">王五</div>
                                    <div style="font-size: 12px; color: #666;">华北区</div>
                                </div>
                                <div style="font-weight: 600; color: #faad14;">¥765,432</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary btn-block" onclick="viewAllRanking()">查看全部</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 19. 质量与供应链管理 - 完整页面
function getQualitySCMContent() {
    return `
        <div class="page-header">
            <h1 class="page-title">质量与供应链管理</h1>
            <p class="page-desc">质量控制和供应商管理</p>
        </div>
        
        <div class="row mb-3">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h3>⚠️ 质量管理</h3>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-6">
                                <div style="padding: 16px; background: #f5f7fa; border-radius: 4px;">
                                    <div style="font-size: 24px; font-weight: 600; color: #52c41a;">98.5%</div>
                                    <div style="font-size: 13px; color: #666; margin-top: 4px;">合格率</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="padding: 16px; background: #f5f7fa; border-radius: 4px;">
                                    <div style="font-size: 24px; font-weight: 600; color: #ff4d4f;">1.5%</div>
                                    <div style="font-size: 13px; color: #666; margin-top: 4px;">不合格率</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">🔴 严重质量问题</div>
                            <div style="font-size: 13px; color: #666; margin-bottom: 4px;">批次 B20260319001 不合格品率超标</div>
                            <div style="font-size: 12px; color: #999;">检测到 2 小时前 · 待处理</div>
                        </div>
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px;">
                            <div style="font-weight: 500; margin-bottom: 8px;">🟡 一般质量问题</div>
                            <div style="font-size: 13px; color: #666; margin-bottom: 4px;">Line-3 尺寸偏差超出公差</div>
                            <div style="font-size: 12px; color: #999;">检测到 5 小时前 · 处理中</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary btn-block" onclick="viewQualityReport()">查看质量报告</button>
                    </div>
                </div>
            </div>
            
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h3>🏪 供应商管理</h3>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-4">
                                <div style="text-align: center; padding: 12px; background: #f5f7fa; border-radius: 4px;">
                                    <div style="font-size: 20px; font-weight: 600;">156</div>
                                    <div style="font-size: 12px; color: #666;">供应商总数</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div style="text-align: center; padding: 12px; background: #f5f7fa; border-radius: 4px;">
                                    <div style="font-size: 20px; font-weight: 600; color: #52c41a;">89</div>
                                    <div style="font-size: 12px; color: #666;">合格供应商</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div style="text-align: center; padding: 12px; background: #f5f7fa; border-radius: 4px;">
                                    <div style="font-size: 20px; font-weight: 600; color: #faad14;">12</div>
                                    <div style="font-size: 12px; color: #666;">待评估</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-weight: 500;">供应商 A</div>
                                    <div style="font-size: 12px; color: #666;">原材料供应</div>
                                </div>
                                <div>
                                    <div style="color: #faad14;">
                                        ★★★★☆
                                    </div>
                                    <div style="font-size: 12px; color: #999; text-align: right;">评分 4.2</div>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 12px; border: 1px solid var(--border-color); border-radius: 4px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-weight: 500;">供应商 B</div>
                                    <div style="font-size: 12px; color: #666;">零部件供应</div>
                                </div>
                                <div>
                                    <div style="color: #faad14;">
                                        ★★★★★
                                    </div>
                                    <div style="font-size: 12px; color: #999; text-align: right;">评分 4.8</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary btn-block" onclick="viewSuppliers()">查看供应商列表</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function getUserManagementContent() { return createPageTemplate('用户管理', 'user-management'); }
function getRolePermissionContent() { return createPageTemplate('角色权限管理', 'role-permission'); }
function getSystemMonitorContent() { return createPageTemplate('系统监控', 'system-monitor'); }
function getLogManagementContent() { return createPageTemplate('日志管理', 'log-management'); }

// 通用页面模板
function createPageTemplate(title, moduleKey) {
    return `
        <div class="page-header">
            <h1 class="page-title">${title}</h1>
            <p class="page-desc">${title}功能模块 - 详细页面开发中...</p>
        </div>
        
        <div class="card">
            <div class="card-body text-center" style="padding: 60px 20px;">
                <div style="font-size: 64px; margin-bottom: 20px;">🚧</div>
                <h2 style="color: var(--text-primary); margin-bottom: 16px;">${title}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">该功能模块的详细页面正在开发中，敬请期待！</p>
                <button class="btn btn-primary" onclick="loadPage('dashboard')">返回首页</button>
            </div>
        </div>
    `;
}

// 模态框相关函数
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.style.zIndex = '10000';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// 模拟功能函数
function showAddModal() {
    alert('新增功能 - 演示版');
}

function editItem(id) {
    alert(`编辑 ID: ${id}`);
}

function deleteItem(id) {
    if (confirm(`确定要删除 ID: ${id} 吗？`)) {
        alert('删除成功');
    }
}

function testConnection() {
    alert('连接测试成功！');
}

function saveDataSource() {
    alert('数据源保存成功！');
    closeModal('addDataSourceModal');
}

function editDataSource(id) {
    alert(`编辑数据源 ID: ${id}`);
}

function deleteDataSource(id) {
    if (confirm(`确定要删除此数据源吗？`)) {
        alert('删除成功');
    }
}

// 页面初始化钩子
window.initPageCharts = function(pageKey) {
    console.log('页面初始化:', pageKey);
    // 在这里可以添加 ECharts 图表初始化代码
};
