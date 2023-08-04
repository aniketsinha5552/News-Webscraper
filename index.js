const express =require('express');
const cors = require('cors');

// Routes Import
const NewsRoute = require('./routes/News');

const app = express();
app.use(cors());


app.listen(5000, () => {
    console.log('Server running on port 5000');
})

app.get('/', (req, res) => {
    res.send('Hello World');
})


// Routes
app.use('/news', NewsRoute);



   
