var nodegeoCoder=require('node-geocoder');

let options={
    provider:'openstreetmap'
}

let geocoder=nodegeoCoder(options);
geocoder.reverse({lat:17.5175525,lon:78.5129142})
//geocoder.geocode('alwal')
.then((res)=>
{
console.log(res)
})
.catch((err)=>{
    console.log(err)
});

