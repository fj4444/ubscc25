# UBS Global Coding Challenge 2025 - Trivia API

## 功能

- GET `/trivia` - 返回9道多选题的答案数组
- GET `/` - 返回API信息

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动服务器：
```bash
npm start
```

3. 访问端点：
- 答案：http://localhost:3000/trivia
- API信息：http://localhost:3000/

## 答案说明

返回的答案数组对应以下问题：
1. 挑战标题以感叹号结尾的数量：2 (3个)
2. 票务代理处理的票类型：2 (博物馆)
3. 数据集列表和元素数量：3 (1000列表x100元素)
4. 公主日记中猫的名字：2 (Fat Louie)
5. 测试用例平均节点数：3 (8个)
6. 没有邦德主题曲的歌手：4 (Amy Winehouse)
7. 最小字体大小：3 (2px)
8. 挑战名称字谜：4 (graft cute leapt)
9. 挑战赛举办地点：2 (澳大利亚、香港、日本、新加坡)

## 示例输出

```json
{
  "answers": [2, 2, 3, 2, 3, 4, 3, 4, 2]
}
```