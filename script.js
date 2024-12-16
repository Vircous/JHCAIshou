/* 照片容器 */
.photo-container {
    margin-top: 20px;
    width: 60%;
    height: 40%;
    border: 5px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow: auto; /* 启用滚动条以显示超出容器的图片 */
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo-container img {
    max-width: 100%; /* 确保图片不会超过容器宽度 */
    max-height: 100%; /* 确保图片不会超过容器高度 */
    height: auto; /* 保持图片原始比例 */
    width: auto; /* 保持图片原始比例 */
}


