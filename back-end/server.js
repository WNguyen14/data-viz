const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
oracledb.initOracleClient({libDir: "/Users/bradberbette/Downloads/instantclient_18_1"});

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/country',(req,res)=>{
    async function fetchDataCountry(){
        try {
            const connection = await oracledb.getConnection({
                user: 'jackson.berbette',
                password: 'ExT2GQUI1vJTM7Z0BsHd1Yq5',
                connectString: 'oracle.cise.ufl.edu/orcl'
            });

            const result = await connection.execute('SELECT * FROM country WHERE ROWNUM <= 5');
            return result;

        } catch (error) {
            return error;
        }
    }

    fetchDataCountry()
    .then(dbRes =>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
})

app.listen(PORT, 
    () => {
        console.log(`listen to port ${PORT}`);
    })