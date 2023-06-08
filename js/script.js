function up_now(){
    event.preventDefault();
    var count;

    count= document.getElementById('count').value;
    
    if(count<10){
        count = parseInt(count) + 1;
        document.getElementById('down').disabled=false;
    }
    else{
        alert('Sayaç 10 sayısından büyük olamaz.')
    }

    document.getElementById('count').value=count;

    console.log(count);

}

function down_now(){
    event.preventDefault();
    var count;

    count= document.getElementById('count').value;

    if(count>0){
          count = parseInt(count) - 1;  
    }
    else(
        alert('Sayaç 0 sayısından küçük olamaz.')
    )



    document.getElementById('count').value=count;

    console.log(count);
}