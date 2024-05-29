const express = require('express');
const app = express(); //express 개체

app.listen(8080, function() {
    console.log('listen on 8080');
}); //서버 열기 (포트번호, 서버 기능)

app.get('/pet', function(req, res) { //요청, 응답
    res.send('펫 용품을 쇼핑할 수 있는 페이지 입니다.');
}); //경로, 기능

app.get('/beauty', function(req, res) { //요청, 응답
    res.send('화장품을 쇼핑할 수 있는 페이지 입니다.');
});

app.get('/', function(req, res) { //요청, 응답
    res.sendFile(__dirname + '/index.html');
});