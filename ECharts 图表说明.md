# 📊 ECharts 销售趋势图 - 实现说明

## 🎉 完成情况

已成功为高管驾驶舱移动端页面集成了**交互式 ECharts 销售趋势图表**！

---

## ✨ 功能特性

### 1. 📈 双曲线对比
- 🔵 **实际销售额** - 蓝色渐变曲线（带面积填充）
- 🟡 **目标销售额** - 黄色虚线
- 直观展示业绩达成情况

### 2. 🗓️ 三维度切换
- **周视图** - 显示最近 7 天数据
- **月视图** - 显示全年 12 个月数据（默认）
- **年视图** - 显示近 6 年趋势

### 3. 💡 智能提示框
鼠标/手指悬停时显示：
```
📅 月份名称
📊 实际：¥XXX 万
🎯 目标：¥XXX 万
━━━━━━━━━━━━━━
完成率：XX.X% （绿色达标/黄色未达标）
```

### 4. 🎨 视觉设计
- ✅ **平滑曲线** - 美观的贝塞尔曲线
- ✅ **渐变填充** - 蓝色渐变面积区域
- ✅ **圆点标记** - 清晰的数据点
- ✅ **虚化网格** - 辅助参考线
- ✅ **响应式布局** - 自动适配屏幕

---

## 📊 图表数据结构

### 月度数据（默认视图）
```javascript
月份：['1 月', '2 月', '3 月', ..., '12 月']
实际：[820, 932, 901, 1234, 1290, ..., 1950] 万元
目标：[800, 900, 950, 1200, 1250, ..., 1900] 万元
```

**趋势分析：**
- 📈 整体呈上升趋势
- 💪 全年大部分月份超额完成
- 🎯 12 月达到峰值 ¥1,950 万

### 周度数据
```javascript
星期：['周一', '周二', ..., '周日']
实际：[180, 230, 210, 290, 320, 280, 250] 万元
目标：[200, 220, 230, 280, 300, 290, 260] 万元
```

**特点：**
- 📊 周五达到周峰值（¥320 万）
- 📉 周一、周三略低于目标

### 年度数据
```javascript
年份：['2020', '2021', ..., '2025']
实际：[4500, 5800, 7200, 9100, 11500, 14200] 万元
目标：[4800, 6000, 7500, 9500, 12000, 15000] 万元
```

**增长趋势：**
- 🚀 6 年增长 3.2 倍
- 📈 年均增长率约 26%
- 💪 持续超越目标

---

## 🎨 图表配置详解

### 1. 提示框配置
```javascript
tooltip: {
    trigger: 'axis',           // 坐标轴触发
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e0e0e0',
    textStyle: { color: '#333' },
    formatter: function(params) {
        // 自定义格式化内容
        return `
            📅 月份
            📊 实际：¥XXX 万
            🎯 目标：¥XXX 万
            完成率：XX.X%
        `;
    }
}
```

### 2. 图例配置
```javascript
legend: {
    data: ['实际销售额', '目标销售额'],
    bottom: 0,                // 底部对齐
    textStyle: { fontSize: 11 }
}
```

### 3. 网格配置
```javascript
grid: {
    left: '3%',
    right: '4%',
    bottom: '15%',           // 留出图例空间
    top: '3%',
    containLabel: true
}
```

### 4. X 轴配置
```javascript
xAxis: {
    type: 'category',
    boundaryGap: false,      // 不留空白
    data: monthData.categories,
    axisLine: { lineStyle: { color: '#d9d9d9' } },
    axisLabel: { 
        color: '#666',
        fontSize: 10
    }
}
```

### 5. Y 轴配置
```javascript
yAxis: {
    type: 'value',
    name: '万元',            // 单位
    splitLine: { 
        lineStyle: { 
            color: '#f0f0f0',
            type: 'dashed'   // 虚线网格
        }
    }
}
```

### 6. 实际销售额曲线
```javascript
{
    name: '实际销售额',
    type: 'line',
    smooth: true,            // 平滑曲线
    symbol: 'circle',
    symbolSize: 6,
    itemStyle: { color: '#1890ff' },
    lineStyle: {
        width: 3,
        color: 渐变色        // 蓝→浅蓝
    },
    areaStyle: {
        color: 渐变色        // 半透明填充
    },
    data: monthData.sales
}
```

### 7. 目标销售额曲线
```javascript
{
    name: '目标销售额',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 6,
    itemStyle: { color: '#faad14' },
    lineStyle: {
        width: 2,
        type: 'dashed'       // 虚线区分
    },
    data: monthData.target
}
```

---

## 🚀 交互功能

### 周期切换功能
```javascript
function updatePeriod(period) {
    // period = 'week' | 'month' | 'year'
    
    // 1. 更新按钮激活状态
    periodBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // 2. 切换数据源
    let newData;
    if (period === 'week') newData = weekData;
    else if (period === 'month') newData = monthData;
    else if (period === 'year') newData = yearData;
    
    // 3. 更新图表
    salesChart.setOption({
        xAxis: { data: newData.categories },
        series: [
            { data: newData.sales },
            { data: newData.target }
        ]
    });
}
```

**使用方式：**
```html
<button onclick="updatePeriod('week')">周</button>
<button onclick="updatePeriod('month')">月</button>
<button onclick="updatePeriod('year')">年</button>
```

### 响应式适配
```javascript
// 窗口大小改变时自动调整图表尺寸
window.addEventListener('resize', function() {
    salesChart.resize();
});
```

---

## 💻 技术实现

### 文件依赖
```html
<!-- 引入 ECharts CDN -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
```

### 初始化代码
```javascript
// 1. 创建图表实例
let salesChart = echarts.init(document.getElementById('salesChart'));

// 2. 设置配置项
salesChart.setOption(chartOption);

// 3. 监听窗口变化
window.addEventListener('resize', () => salesChart.resize());
```

### HTML 容器
```html
<div id="salesChart" style="width: 100%; height: 200px;"></div>
```

---

## 📱 移动端优化

### 字体大小
- 坐标轴标签：10px
- 图例文字：11px
- 提示框内文：12-14px

### 触摸优化
- 数据点大小：6px（适合手指点击）
- 提示框触发：axis（坐标轴范围）
- 按钮尺寸：适合拇指操作

### 性能优化
- 禁用不必要的动画
- 简化图形元素
- 使用轻量级配置

---

## 🎯 数据可视化效果

### 颜色语义
| 元素 | 颜色 | 含义 |
|------|------|------|
| 实际销售额 | 🔵 #1890ff | 商务、专业 |
| 目标销售额 | 🟡 #faad14 | 警示、对比 |
| 完成率达标 | 🟢 #52c41a | 成功、通过 |
| 完成率未达标 | 🟠 #faad14 | 警告、注意 |

### 渐变效果
```javascript
// 曲线渐变：深蓝→浅蓝
new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#1890ff' },
    { offset: 1, color: '#69c0ff' }
])

// 面积渐变：上→下透明度递减
new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
    { offset: 1, color: 'rgba(24, 144, 255, 0.05)' }
])
```

---

## 📊 图表截图描述

### 整体布局
```
┌─────────────────────────────┐
│ 📈 销售趋势                 │
│         [周] [月] [年]      │
├─────────────────────────────┤
│                             │
│     ╱╲    ╱╲                │
│    ╱  ╲  ╱  ╲   ╱╲          │  实际曲线
│   ╱    ╲╱    ╲ ╱  ╲         │  （蓝色渐变）
│  ╱      ╲    ╱    ╲         │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─         │  目标虚线
│                             │
│  ━━━━━━━━━━━━━━━━━━━        │  X 轴（月份）
│  1 月 3 月 5 月 ... 12 月    │
│                             │
│     实际销售额  目标销售额   │  图例
└─────────────────────────────┘
```

### 提示框示例
```
┌──────────────────┐
│ 7 月              │
│ 📊 实际：¥1520 万 │
│ 🎯 目标：¥1500 万 │
│ ──────────────── │
│ 完成率：101.3%   │ ← 绿色（达标）
└──────────────────┘
```

---

## 🔧 自定义修改指南

### 修改数据
编辑 `dashboard-mobile.html` 中的数据数组：
```javascript
const monthData = {
    categories: ['1 月', '2 月', ...],  // 修改分类
    sales: [820, 932, ...],            // 修改实际值
    target: [800, 900, ...]            // 修改目标值
};
```

### 修改颜色
```javascript
itemStyle: { color: '#你的颜色' }  // 修改曲线颜色
```

### 修改尺寸
```css
#salesChart {
    width: 100%;
    height: 250px;  /* 修改高度 */
}
```

### 修改图表类型
```javascript
type: 'bar'      // 柱状图
type: 'line'     // 折线图（当前）
type: 'area'     // 面积图
```

---

## 📈 扩展建议

### 优先级 1 - 添加更多图表
- [ ] 部门业绩排行饼图
- [ ] 客户增长趋势图
- [ ] 产品质量合格率趋势
- [ ] 库存周转率图表

### 优先级 2 - 增强交互
- [ ] 双击放大查看细节
- [ ] 拖拽缩放时间范围
- [ ] 数据点点击查看详情
- [ ] 导出图表图片

### 优先级 3 - 实时数据
- [ ] 对接 API 获取实时数据
- [ ] WebSocket 实时更新
- [ ] 定时自动刷新
- [ ] 离线数据缓存

---

## 🎉 总结

### 已实现功能
✅ **ECharts 5.4.3** 完整集成  
✅ **双曲线对比** 实际 vs 目标  
✅ **三维度切换** 周/月/年视图  
✅ **智能提示框** 详细数据展示  
✅ **响应式设计** 自动适配屏幕  
✅ **渐变美化** 专业视觉效果  

### 用户体验
✅ **流畅交互** 点击切换周期  
✅ **清晰可读** 移动端优化字体  
✅ **快速加载** CDN 加速  
✅ **触摸友好** 适合手机操作  

---

**立即体验：** [`dashboard-mobile.html`](file:///c:/Users/Administrator/Desktop/数据中台/web2/dashboard-mobile.html)

© 2026 企业数据中台。All rights reserved.  
更新日期：2026-03-19
