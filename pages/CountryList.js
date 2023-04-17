import axios from 'axios';
import React from 'react';

const CountryList = props =>{
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        axios('http://localhost:5000/country')
        .then(response=>{
            if(response.status===200){
                const fetchedData = response.data;
                console.log('fetchedData', fetchedData);
                setData(fetchedData);
            }
        })
        .catch(err=>{

        })
    },[])

    return (<div>
        CountryList Component
        {
            data.rows
            // data.length>0 &&
            // data.map((item)=>
            //     <div>{item}</div>)
        }
    </div>)
}

export default CountryList;