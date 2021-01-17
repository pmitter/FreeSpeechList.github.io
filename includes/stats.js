$.getJSON('../list.json',function (data) {
    console.log(data);
    var bannedList = [];
    var availList = [];
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

      // Operation for availList
      for(let j=0;j<data[i].available.length;j++)
      {
        console.log(data[i].available[j].personal)
        if((availList.find(record => (record.name === data[i].available[j].name)))!=undefined){
          for(let k=0;k<availList.length;k++)
          {
            if(availList[k].name!= data[i].available[j].name)
              continue;
            else{
              availList[k].count+=1;
              break;
            }
          }
        }else{
          console.log("False");
          availList.push({name:data[i].available[j].name,logo:data[i].available[j].logo,count:1,personal:data[i].available[j].personal});
        }
      }
    }
    //Sorting bannedList & availList

    bannedList.sort(function (a,b){
      return b.count - a.count;
    })

    availList.sort(function (a,b){
      return b.count - a.count;
    })
    //Checking the count and then displaying in table
    var tableData ='';
    for(let i=0;i<bannedList.length;i++){
      tableData+='<tr>';
        tableData+='<td>'+(i+1)+'</td>';
        tableData+='<td><i class="'+bannedList[i].logo+'"></i>&nbsp;'+bannedList[i].name+'</td>';
        tableData+='<td>'+bannedList[i].count+'</td>';
      tableData+='</tr>';
    }
    $('#bannedTable').append(tableData);

    tableData='';
    let index=1;
    for(let i=0;i<availList.length;i++){
      if(availList[i].personal!=1){
        tableData+='<tr>';
        tableData+='<td>'+index+'</td>';
        tableData+='<td><i class="'+availList[i].logo+'"></i>&nbsp;'+availList[i].name+'</td>';
        tableData+='<td>'+availList[i].count+'</td>';
      tableData+='</tr>';
      index++;
      }
    }
    $('#availTable').append(tableData);

    var obj = [{
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

  localStorage.setItem('top-banned-list',JSON.stringify(obj));
  })