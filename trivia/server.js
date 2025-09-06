const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 根据题目分析得出的答案
const triviaAnswers = [
  4, // 问题1: 有多少个挑战标题以感叹号结尾？答案是3个
  1, // 问题2: 票务代理处理什么类型的票？答案是博物馆
  2, // 问题3: 数据集中有多少列表和每个列表的元素？答案是1000列表x100元素
  2, // 问题4: 公主日记中Mia公主的猫叫什么名字？答案是Fat Louie
  3, // 问题5: 测试用例中节点的平均数量是多少？答案是8
  4, // 问题6: 哪位歌手没有为詹姆斯·邦德主题曲演唱？答案是Amy Winehouse
  4, // 问题7: 我们问题中最小的字体大小是多少？答案是2px
  5, // 问题8: 哪些是挑战名称的字谜？答案是graft cute leapt
  4  // 问题9: UBS全球编程挑战赛之前在哪里举办过？答案是澳大利亚、香港、日本、新加坡
];

// GET /trivia 端点
app.get('/trivia', (req, res) => {
  res.json({
    answers: triviaAnswers
  });
});
// 根路径
app.get('/', (req, res) => {
  res.json({
    message: 'UBS Global Coding Challenge 2025 - Trivia API',
    endpoint: '/trivia',
    description: '访问 /trivia 获取多选题答案'
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
  console.log(`访问 http://localhost:${PORT}/trivia 获取答案`);
});

module.exports = app;
