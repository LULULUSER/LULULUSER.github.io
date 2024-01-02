document.addEventListener('DOMContentLoaded', (event) => {
    var draggedImg = null;

    document.querySelectorAll('.interactive-img').forEach(img => {
        img.addEventListener('dragstart', (e) => {
            draggedImg = e.target;
        });

        img.addEventListener('dragend', (e) => {
            e.preventDefault();
            const x = e.clientX;
            const y = e.clientY;
            draggedImg.style.left = x - draggedImg.width / 2 + 'px';
            draggedImg.style.top = y - draggedImg.height / 2 + 'px';
        });

        img.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'link') {
                // 处理跳转链接
                window.location.href = e.target.dataset.url;
            } else if (action === 'zoom') {
                // 显示放大的图片
                showZoomedImage(e.target.dataset.largeSrc);
            }
        });
    });

    // 防止图片被拖到无法放置的地方
    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
});

function showZoomedImage(src) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<div class="close-modal-area"></div><img class="modal-content" src="${src}">`;
    document.body.appendChild(modal);

    modal.style.display = 'block';

    // 点击模态背景关闭放大的图片
    modal.querySelector('.close-modal-area').addEventListener('click', () => {
        modal.style.display = 'none';
        modal.remove();
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    var draggedElement = document.getElementById('C1469526797');
    var startX, startY;

    draggedElement.addEventListener('mousedown', (e) => {
        // 记录起始位置
        startX = e.clientX - draggedElement.getBoundingClientRect().left;
        startY = e.clientY - draggedElement.getBoundingClientRect().top;

        // 当鼠标移动时，调用 onMouseMove 函数
        document.addEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(e) {
        // 更新黄色框的位置
        draggedElement.style.left = (e.clientX - startX) + 'px';
        draggedElement.style.top = (e.clientY - startY) + 'px';
    }

    // 当鼠标松开时移除事件监听器
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    });
});


