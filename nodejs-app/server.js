const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 GitOps 파이프라인 테스트 중!</h1>
        <p>현재 서버 시간: ${new Date().toLocaleString()}</p>
        <p>버전: v1.0.0 (자동 배포 성공!)</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
