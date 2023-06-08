function up_now(){
    event.preventDefault();
    var count;

    count= document.getElementById('count').value;
    count = parseInt(count) + 1;

    if(count>10){
        count = 0;

    }

    document.getElementById('count').value=count;

    console.log(count);

}

function down_now(){
    event.preventDefault();
    var count;

    count= document.getElementById('count').value;
    count = parseInt(count) - 1;
    if(count<1){
            count = 10;
    }



    document.getElementById('count').value=count;

    console.log(count);
}