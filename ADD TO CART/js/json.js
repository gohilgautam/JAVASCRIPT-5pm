function viewData(){
    var viewdata = localStorage.getItem('cart');
    var view = JSON.parse(viewdata);

    var data = "<table border='1'><tr><th>name</th><th>Profile pic</th><th>quantity</th><th>Price</th><th>delete</th></tr>";
    for(var i=0; i<view.length; i++){
        data += `<tr>`
        data += `<td>${view[i]['name']}</td>`
        data += `<td><img src = 'img/${view[i]['img']}' width='50px'></img></td>`;
        data += `<td>${view[i]['quantity']}</td>`
        data += `<td>${view[i]['price']}</td>`
        data += `<td><a href = "javascript:deletData(${view[i]['no']})">delete</a></td>`
       data += `</tr>`
    }
    data += "</table>";
    document.getElementById("res").innerHTML = data;
 }
  viewData();

  
  function deletData(no){
    var dedata = localStorage.getItem('cart');
    var ddata = JSON.parse(dedata);

    for(var i=0;i<ddata.length;i++){
        if(ddata[i]['no'] == no){
            ddata.splice(i, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(ddata));
    viewData();

  }