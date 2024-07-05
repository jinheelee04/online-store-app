const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors')

app.use(cors());
app.get('/',(req, res)=>{
    res.send('안녕하세요.1111');
})

// app.use('/haha', express.static('uploads')); // 정적인 파일 제공, '/haha' 가상경로 지정, 상대경로
// console.log(path.join(__dirname,'../uploads')); // online-store-app\backend\uploads
// console.log(path.join(__dirname,'/uploads')); // online-store-app\backend\src\uploads
app.use(express.static(path.join(__dirname,'../uploads'))); // path 절대경로 사용

app.listen(port, ()=>{
    console.log(`${port}번에서 실행이 되었습니다.`);
});