const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = {
    "userAccount": "0x1ABc133C222a185fEde2664388F08ca12C208F76",
    "tokenId": 1,
    "powerGenerated": 1000,
    "powerConsumed": 800,
}


app.get('/', (req, res) => {
    res.send(data);
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})