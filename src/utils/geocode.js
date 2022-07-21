const request=require('request')

const geocode=(address,callback)=>{
    const url='http://api.positionstack.com/v1/forward?access_key=33f59c4534901b0f4c94ac739e7f1c4b&query=' + encodeURIComponent(address)

    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }
        else if(body.error||body.data.length==0){
            callback('Unable to find geolocation.Try another search',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.data[0].latitude,
                longitude:body.data[0].longitude,
                place:body.data[0].label,


            })
        }

    })

}

module.exports=geocode