// 登录表单处理
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = YOUR_PASSWORD'password').value;
            const remember = document.getElementById('remember').checked;
            
            // 简单验证
            if (!username || !password) {
                showMessage('请输入用户名和密码', 'error');
                return;
            }
            
            // 模拟登录（实际项目中应该调用后端 API）
            simulateLogin(username, password, remember);
        });
    }
    
    // 检查是否有记住的用户名
    checkRememberedUser();
});

function simulateLogin(username, password, remember) {
    // 显示加载状态
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>登录中...</span>';
    submitBtn.disabled = true;
    
    // 模拟 API 调用延迟
    setTimeout(() => {
        // 简单的验证逻辑（实际项目应该调用后端接口）
        if (username === 'admin' && password === 'admin123') {
            // 登录成功
            if (remember) {
                localStorage.setItem('rememberedUser', username);
            } else {
                localStorage.removeItem('rememberedUser');
            }
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', username);
            
            showMessage('登录成功，跳转中...', 'success');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        } else {
            // 登录失败
            showMessage('用户名或密码错误（提示：admin/admin123）', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }, 800);
}

function checkRememberedUser() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember').checked = true;
    }
    
    // 如果已经登录，直接跳转到首页
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'index.html';
    }
}

function showMessage(message, type = 'info') {
    // 移除已存在的消息
    const existingMessage = document.querySelector('.message-box');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建消息元素
    const messageBox = document.createElement('div');
    messageBox.className = `message-box message-${type}`;
    messageBox.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        background-color: ${type === 'success' ? '#52c41a' : type === 'error' ? '#ff4d4f' : '#1890ff'};
        color: white;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideDown 0.3s ease;
    `;
    messageBox.textContent = message;
    
    document.body.appendChild(messageBox);
    
    // 3 秒后自动移除
    setTimeout(() => {
        messageBox.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            messageBox.remove();
        }, 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
