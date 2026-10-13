// 布局管理
document.addEventListener('DOMContentLoaded', function() {
    // 注释掉登录检查，让 index.html 可以直接打开
    // checkLoginStatus();
    
    // 初始化侧边栏
    initSidebar();
    
    // 初始化顶部栏
    initTopbar();
    
    // 加载默认内容
    loadPage('dashboard');
});

// 检查登录状态（暂时保留，但不使用）
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // window.location.href = 'login.html';  // 注释掉，允许直接访问
    }
}

// 初始化侧边栏
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarNav = document.getElementById('sidebarNav');
    
    // 渲染导航菜单
    renderMenu(sidebarNav);
    
    // 侧边栏折叠/展开
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        });
    }
    
    // 恢复侧边栏状态
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    // 移动端菜单按钮
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }
}

// 渲染菜单
function renderMenu(container) {
    if (!container) return;
    
    const menuHtml = generateMenuHtml(MENU_CONFIG);
    container.innerHTML = menuHtml;
    
    // 绑定菜单点击事件
    bindMenuEvents();
}

function generateMenuHtml(menuItems, isSubmenu = false) {
    let html = '<ul class="nav-menu">';
    
    menuItems.forEach(item => {
        if (item.type === 'item') {
            html += `
                <li class="nav-item" data-key="${item.key}">
                    <a href="javascript:void(0)" class="nav-link">
                        <span class="nav-icon">${item.icon}</span>
                        <span class="nav-text">${item.title}</span>
                    </a>
                </li>
            `;
        } else if (item.type === 'group') {
            html += `
                <li class="nav-item" data-key="${item.key}">
                    <a href="javascript:void(0)" class="nav-link">
                        <span class="nav-icon">${item.icon}</span>
                        <span class="nav-text">${item.title}</span>
                        <svg class="nav-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                    <ul class="submenu">
                        ${item.children.map(child => `
                            <li class="nav-item" data-key="${child.key}">
                                <a href="javascript:void(0)" class="nav-link">
                                    <span class="nav-text">${child.title}</span>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </li>
            `;
        }
    });
    
    html += '</ul>';
    return html;
}

function bindMenuEvents() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const navItem = this.closest('.nav-item');
            const parentMenu = navItem.closest('.nav-menu');
            
            // 如果是父菜单（有子菜单）
            if (parentMenu && parentMenu.classList.contains('nav-menu') && navItem.querySelector('.submenu')) {
                e.preventDefault();
                
                // 切换展开状态
                navItem.classList.toggle('open');
                
                // 手风琴效果 - 关闭其他打开的菜单
                const siblings = parentMenu.querySelectorAll('.nav-item.open');
                siblings.forEach(sibling => {
                    if (sibling !== navItem) {
                        sibling.classList.remove('open');
                    }
                });
            } else {
                // 子菜单或单项菜单
                e.preventDefault();
                
                // 移除所有激活状态
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                
                // 添加激活状态
                this.classList.add('active');
                navItem.classList.add('active');
                
                // 加载对应页面
                const menuKey = navItem.dataset.key;
                loadPage(menuKey);
                
                // 更新面包屑
                updateBreadcrumb(navItem);
                
                // 移动端自动收起侧边栏
                if (window.innerWidth <= 768) {
                    document.getElementById('sidebar').classList.remove('show');
                }
            }
        });
    });
}

// 更新面包屑导航
function updateBreadcrumb(navItem) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    
    const navText = navItem.querySelector('.nav-text');
    if (!navText) return;
    
    const title = navText.textContent.trim();
    const parentItem = navItem.closest('.submenu');
    
    if (parentItem) {
        const parentLink = parentItem.closest('.nav-item').querySelector('.nav-text');
        const parentTitle = parentLink ? parentLink.textContent.trim() : '';
        
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item"><a href="index.html" style="color: inherit; text-decoration: none;">首页</a></span>
            <span class="breadcrumb-item">${parentTitle}</span>
            <span class="breadcrumb-item">${title}</span>
        `;
    } else {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item"><a href="index.html" style="color: inherit; text-decoration: none;">首页</a></span>
            <span class="breadcrumb-item">${title}</span>
        `;
    }
}

// 初始化顶部栏
function initTopbar() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('确定要退出登录吗？')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser');
                localStorage.removeItem('rememberedUser');
                window.location.href = 'login.html';
            }
        });
    }
    
    // 显示当前用户
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const usernameEl = document.getElementById('currentUsername');
        if (usernameEl) {
            usernameEl.textContent = currentUser;
        }
    }
}

// 加载页面内容
function loadPage(pageKey) {
    const contentArea = document.getElementById('contentArea');
    if (!contentArea) return;
    
    // 显示加载状态
    contentArea.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><p>加载中...</p></div>';
    
    // 根据页面 key 加载不同的内容
    setTimeout(() => {
        const pageContent = getPageContent(pageKey);
        contentArea.innerHTML = pageContent;
        
        // 页面加载后初始化
        if (window.initPageCharts) {
            window.initPageCharts(pageKey);
        }
    }, 300);
}

// 获取页面内容 - 调用 pages.js 中的函数
function getPageContent(pageKey) {
    if (typeof window.PAGE_CONTENT === 'function') {
        return window.PAGE_CONTENT(pageKey);
    }
    return '<h2>页面开发中...</h2>';
}
