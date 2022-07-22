const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=2838fb60cd35590f0975ad14827f8326&query=${latitude},${longitude}`
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to provide service',undefined)
        }
        else if(body.error){
            callback('Unable to get the weather',undefined)
        }
        else{
            // console.log(body.current)
            callback(undefined,{
                weatherdescription:body.current.weather_descriptions[0],
                currenttemp:body.current.temperature,
                feelslike:body.current.feelslike,
                humidity:body.current.humidity
                

            })
            
        }
    })
}

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

module.exports=forecast