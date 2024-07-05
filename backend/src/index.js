const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors')

app.use(cors());
app.use(express.json()); // Express 애플리케이션에서 JSON 형태의 요청(request) body를 파싱(parse)하기 위해 사용되는 미들웨어(middleware)

app.get('/',(req, res)=>{
    res.send('안녕하세요.1111');
})

app.post('/', (req, res) =>{
    console.log(req.body);
    res.json(req.body);
})

// app.use('/haha', express.static('uploads')); // 정적인 파일 제공, '/haha' 가상경로 지정, 상대경로
// console.log(path.join(__dirname,'../uploads')); // online-store-app\backend\uploads
// console.log(path.join(__dirname,'/uploads')); // online-store-app\backend\src\uploads
app.use(express.static(path.join(__dirname,'../uploads'))); // path 절대경로 사용

app.listen(port, ()=>{
    console.log(`${port}번에서 실행이 되었습니다.`);
});