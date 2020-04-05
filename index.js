const express = require('express');
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

// 클라이언트에서 오는 정보를 서버에서 분석해서 가져올수있게
// application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(err=>console.log(err))



app.get('/', (req, res) => res.send('버터플라이 버터플라이'))


app.post('/register', (req, res)=> {

    //회원가입시 필요한 정보를 client에서 가져오면 
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.post('/register', (req,res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success:true
        })
    })
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))