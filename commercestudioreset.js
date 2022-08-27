
  var idx=document.URL.indexOf('?');
  var values=new Array();
  if(idx!=-1){

    var pairs=document.URL.substring(idx+1, document.URL.length).split('&');
          for(var i=0;i<pairs.length;i++){
      nameVal= pairs[i].split('=');
      values[nameVal[0]]=nameVal[1];}
    }
   name=unescape(values["name"]);
   var text="requested admin".bold();
   document.getElementById("namemsg").innerHTML="Thanks "+ name +" for your interest, We have "+ text +" to verify and approval. Watchout your email for welcome email with magic link for us.";
alert(name);
