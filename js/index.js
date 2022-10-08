

var uberSUV = document.getElementById('uberSUV')
var userX = document.getElementById('uberX')
var uberBlack = document.getElementById('uberBlack')
var result
var tableArr = []
var table = document.querySelector('.table')
var tbBody = document.querySelector('#tbUber')

console.log(tbBody)

function emty(km,time){
    if(km === 0 || time === 0){
        alert("Không được để trống")
    }
}

document.querySelector('.contact100-form-btn').onclick = function(){
   if(uberX.checked){
    result = 'uberX'
   }
   if(uberSUV.checked){
    result = 'uberSUV'
   }
   if(uberBlack.checked){
    result = 'uberBlack'
   }

   switch(result){
        case 'uberX':{
             var km = Number(document.querySelector('.input100').value)
         var timeWait = Number(document.querySelector('.timeWait').value)
       
         emty(km,timeWait);

         var totalPrice = 8000

         if(km <= 1){
           return totalPrice
         }else if(km > 1 && km <= 20){
             totalPrice  +=  (km - 1)* 12000
            
         }else{
             totalPrice  += (km - 1) * 10000
             
         }

         totalPrice += timeWait * 2000
         document.getElementById('xuatTien').innerHTML = totalPrice
         document.getElementById('divThanhTien').style.display = 'block'

         var kmTable
         if(km <= 20){
            kmTable =  `
             <tr>
            <td>UberX</td>
            <td>${km-1}</td>
            <td>12000</td>
            <td>${(km - 1)* 12000}</td>
            </tr>
        `
         }
         if(km > 20){
            kmTable =  `
            <tr>
           <td>UberX</td>
           <td>${km-1}</td>
           <td>10000</td>
           <td>${(km - 1)* 10000}</td>
           </tr>
       `

         }

        var row =  `
        <tr>
            <td>UberX</td>
            <td>1</td>
            <td>8000</td>
            <td>8000</td>
        </tr>
        ${kmTable}
        <tr>
        <td>Thời gian chờ</td>
        <td>${timeWait}</td>
        <td>2000</td>
        <td>${timeWait*2000}</td>
        </tr>

        <tr class="bg-success bg-gradient bg-opacity-25 text-success" >
            <td >Total</td>
            <td></td>
            <td></td>
            <td>${totalPrice}</td>
        </tr>
        
`         
           
            tbBody.innerHTML = row;
         break;
        }
        case 'uberSUV':{
              var km = Number(document.querySelector('.input100').value)
         var timeWait = Number(document.querySelector('.timeWait').value)
         var totalPrice = 9000
         emty(km,timeWait);
         if(km <= 1){
           return totalPrice
         }else if(km > 1 && km <= 20){
             totalPrice  +=  (km - 1)* 14000
         }else{
             totalPrice  += (km - 1) * 12000
         }

         totalPrice += timeWait * 3000

        document.getElementById('xuatTien').innerHTML = totalPrice
        document.getElementById('divThanhTien').style.display = 'block'

        var kmTable
        if(km <= 20){
           kmTable =  `
            <tr>
           <td>UberX</td>
           <td>${km-1}</td>
           <td>12000</td>
           <td>${(km - 1)* 14000}</td>
           </tr>
       `
        }
        if(km > 20){
           kmTable =  `
           <tr>
          <td>UberX</td>
          <td>${km-1}</td>
          <td>10000</td>
          <td>${(km - 1)* 12000}</td>
          </tr>
      `

        }

       var row =  `
       <tr>
           <td>UberX</td>
           <td>1</td>
           <td>9000</td>
           <td>9000</td>
       </tr>
       ${kmTable}
       <tr>
       <td>Thời gian chờ</td>
       <td>${timeWait}</td>
       <td>3000</td>
       <td>${timeWait*3000}</td>
       </tr>

       <tr class="bg-success bg-gradient  bg-opacity-25 text-success" >
           <td >Total</td>
           <td></td>
           <td></td>
           <td>${totalPrice}</td>
       </tr>
       
`         
          
           tbBody.innerHTML = row;
        break;
        }

        case 'uberBlack':{
             var km = Number(document.querySelector('.input100').value)
     var timeWait = Number(document.querySelector('.timeWait').value)
     var totalPrice = 10000
     emty(km,timeWait);
     if(km <= 1){
       return totalPrice
     }else if(km > 1 && km <= 20){
         totalPrice  +=  (km - 1)* 16000
     }else{
         totalPrice  += (km - 1) * 14000
     }

     totalPrice += timeWait * 4000

    document.getElementById('xuatTien').innerHTML = totalPrice
    document.getElementById('divThanhTien').style.display = 'block'

    var kmTable
    if(km <= 20){
       kmTable =  `
        <tr>
       <td>UberX</td>
       <td>${km-1}</td>
       <td>16000</td>
       <td>${(km - 1)* 16000}</td>
       </tr>
   `
    }
    if(km > 20){
       kmTable =  `
       <tr>
      <td>UberX</td>
      <td>${km-1}</td>
      <td>14000</td>
      <td>${(km - 1)* 14000}</td>
      </tr>
  `

    }

   var row =  `
   <tr>
       <td>UberX</td>
       <td>1</td>
       <td>10000</td>
       <td>10000</td>
   </tr>
   ${kmTable}
   <tr>
   <td>Thời gian chờ</td>
   <td>${timeWait}</td>
   <td>4000</td>
   <td>${timeWait*4000}</td>
   </tr>

   <tr class="bg-success bg-gradient  bg-opacity-25 text-success" >
       <td >Total</td>
       <td></td>
       <td></td>
       <td>${totalPrice}</td>
   </tr>
   
`         
      
       tbBody.innerHTML = row;
    break;
        }
        default:{
            alert('Vui Long Chon Loai Xe')
            break;
        }
   }
}

