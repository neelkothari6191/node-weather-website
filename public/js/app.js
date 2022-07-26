// console.log('Client side javascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=mumbai').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm=document.querySelector('form')
const search =document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')


// messageOne.textContent='From Javascript'



weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()

    const location =search.value

    messageOne.textContent='Loading ...'
    messageTwo.textContent=''
    // http://localhost:3000
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
            // console.log(data.error)
        }else{
            
            
            messageOne.textContent=data.location;
            
            const { weatherdescription, currenttemp, feelslike } = data.forecast;
 
            messageTwo.textContent = `${weatherdescription} It is ${currenttemp} degrees Celcius, feels like ${feelslike} .`;
            // console.log(data.forecast);
        }
    })
})

})