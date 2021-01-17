var obj = JSON.parse(localStorage.getItem('top-banned-list'));
console.log(obj[0].count);
var top_list='<div class="col-sm-4">'+'Banned from '+obj[0].name+':';
top_list+='<p><strong>'+obj[0].count+'</strong></p></div>';
top_list+='<div class="col-sm-4">'+'Banned from '+obj[1].name+':';
top_list+='<p><strong>'+obj[1].count+'</strong></p></div>';
top_list+='<div class="col-sm-4">'+'Banned from '+obj[2].name+':';
top_list+='<p><strong>'+obj[2].count+'</strong></p></div>';

$('#top-three').append(top_list);
