var obj = JSON.parse(localStorage.getItem('top-banned-list'));
//console.log("Obj= "+obj);

if(obj==null){
    console.log("obj is null");
    $.getJSON('list.json', function (data){
    var bannedList = [];
    for(let i=0;i<data.length;i++)
    {
      // Operation for banned list
      for(let j=0;j<data[i].banned.length;j++)
      {
        if((bannedList.find(record => record.name === data[i].banned[j].name))!=undefined){
          for(let k=0;k<bannedList.length;k++)
          {
            if(bannedList[k].name!= data[i].banned[j].name)
              continue;
            else{
              bannedList[k].count+=1;
              break;
            }
          }
        }else{
          bannedList.push({name:data[i].banned[j].name,logo:data[i].banned[j].logo,count:1});
        }
      }
    }
    //Sorting bannedList & availList

    bannedList.sort(function (a,b){
      return b.count - a.count;
    })
    console.table(bannedList);

    obj = [{
        name:bannedList[0].name,
        count:bannedList[0].count
        },
        {
          name:bannedList[1].name,
          count:bannedList[1].count
        },
        {
          name:bannedList[2].name,
          count:bannedList[2].count
        }
    ]

    //console.log("OBJ ="+obj)
    //console.log("End of the if")
    var top_list='<div class="col-sm-4">'+'Banned from '+obj[0].name+':';
    top_list+='<p><strong>'+obj[0].count+'</strong></p></div>';
    top_list+='<div class="col-sm-4">'+'Banned from '+obj[1].name+':';
    top_list+='<p><strong>'+obj[1].count+'</strong></p></div>';
    top_list+='<div class="col-sm-4">'+'Banned from '+obj[2].name+':';
    top_list+='<p><strong>'+obj[2].count+'</strong></p></div>';
    $('#top-three').append(top_list);
    })
}
else{
//console.log("Obj ="+obj);
var top_list='<div class="col-sm-4">'+'Banned from '+obj[0].name+':';
top_list+='<p><strong>'+obj[0].count+'</strong></p></div>';
top_list+='<div class="col-sm-4">'+'Banned from '+obj[1].name+':';
top_list+='<p><strong>'+obj[1].count+'</strong></p></div>';
top_list+='<div class="col-sm-4">'+'Banned from '+obj[2].name+':';
top_list+='<p><strong>'+obj[2].count+'</strong></p></div>';
$('#top-three').append(top_list);
}