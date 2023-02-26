
async function doAjax(url)
{
  let result = await $.getJSON(url);
  return result;
}
async function doAjax1(url)
{
  let result = await $.getJSON(url);
  return result;
}
async function doAjax2(url)
{
  let result = await $.getJSON(url);
  return result;
}


$(function(){
  let id;
     
        doAjax('https://jsonplaceholder.typicode.com/users').then((data)=>
        {
          for(let i =0;i<10;i++)
            $("#"+i).text(data[i].name);
        });


        $(".flex-item").bind('click', function (e) {
           id =parseInt(e.currentTarget.id);
           id+=1;
           let div =document.getElementById("post");
           div.innerHTML="";
           let pach='https://jsonplaceholder.typicode.com/users?id='+id;
           doAjax1(pach).then((data)=> 
        {
          $("#name").text(data[0].name);
          $("#Username").text(data[0].username);
          $("#Email").text(data[0].email);
          $("#Phone").text(data[0].phone);
          $("#Website").text(data[0].website);

          let adrres=data[0].address.city+ " "+data[0].address.street;
          $("#Address").text(adrres);
        });   
            });

            
            $(".but").bind('click', function (e) {
           let pach='https://jsonplaceholder.typicode.com/posts?userId='+id;
           doAjax2(pach).then((data)=> 
        {
          
          let fwef=23;
          for(let i=0;i<data.length;i++)
          {
            let Di=document.getElementById("post");
            let div=document.createElement("div")
            div.setAttribute("class","flextem")
             let h1=document.createElement("h2")
             let p=document.createElement("p")
             let text=document.createTextNode(data[i].title);
             let text1=document.createTextNode(data[i].body);
             h1.appendChild(text);
             p.appendChild(text1);
             
             div.appendChild(h1);
             div.appendChild(p);
             Di.appendChild(div);

          }
         
        });   
            });

      });

