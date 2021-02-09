$.getJSON("./list.json",function(data){
    var people_list ='';
    var point=0;
    var rows = (data.length)%3==0 ? Math.trunc(data.length/3) : Math.trunc(data.length/3)+1;
    //console.log(rows);
    for(let i=1;i<=rows;i++)
    {
      //console.log("Row="+i);
      people_list+='<div class="row">';
      let count=1;
      while(count<=3 && point<data.length)
      {
        people_list+='<div class="col-sm-4 mb-2"   style="margin-top: 40px;">';
         people_list+='<div id="card" class="card">';
           //iMAGE
           //console.log("Image="+data[point].image);
           people_list+='<img src="'+data[point].image+'" alt="John" style="width:100%">';
           people_list+='<div class="container-fluid">';
             people_list+='<br>';
             //Name
             people_list+='<p style="text-align: center; font-size: 27px; font-family: arial; font-weight: bold;">'+data[point].name+'</p>';
             people_list+='<hr>';
             //Banned From
             people_list+='<p id="title" class="title" style="font-size: 25px;"><i class="fas fa-times-circle" style="color: red;"></i> Banned from:</p>';
             people_list+='<p align="center;">';
               //List of banned websites
               //console.log("Length of Banned="+(data[point].banned).length);
               for(let j=0;j<(data[point].banned).length;j++){
                 if(j==((data[point].banned).length-1))
                 {
                   people_list+='<i class="'+data[point].banned[j].logo+'" style="font-size: 23px;"></i>';
                 }
                 else{
                   people_list+='<i class="'+data[point].banned[j].logo+'" style="font-size: 23px;">&nbsp; &nbsp;</i>';
                 }
                }
             people_list+='</p>';
             people_list+='<hr>';
             people_list+='<p id="title" class="title" style="font-size: 25px; font-weight: bold;"><i class="fas fa-check-circle" style="color: green;"></i> Currently on:</p>';
             people_list+='<p align="center;">';
               var without_logo='<p style="font-size: 23px;">';
               var with_logo='<p>';
               for(let j=0;j<(data[point].available).length;j++){
                 if(data[point].available[j].logo==''){
                   without_logo+='<a href="'+data[point].available[j].link+'" target="_blank" style="font-weight: bold;">'+data[point].available[j].name+'</a>,&nbsp;';
                 }
                 else{
                   with_logo+='<a href="'+data[point].available[j].link+'" target="_blank"><i class="'+data[point].available[j].logo+'"style="font-size: 23px;"></i></a><strong style="font-size: 23px;"> &nbsp </strong>&nbsp;'
                 }
               }
               //without_logo+=without_logo.slice(0,-1);
               without_logo=without_logo.slice(0,-7)+'</p>';
               with_logo=with_logo.slice(0,-49)+'</p>';
               //console.log("With Logo ="+with_logo);
               people_list+=without_logo;
               people_list+=with_logo;
             people_list+='</p>';
             people_list+='<br>';  
           people_list+='</div>';
         people_list+='</div>';
        people_list+='</div>';
        count++;
        point++;       
        //console.log("Count="+(count++)+" Point="+(point++));
      }
     people_list+='</div>';
    }
    $('#people-list').append(people_list);
  })