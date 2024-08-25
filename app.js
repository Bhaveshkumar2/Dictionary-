let searchInput=document.getElementById("searchInput");
let searchBtn=document.getElementById("searchBtn");

const getData=async(searchValue)=>{
    let data= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
      let jsonData= await data.json();
      document.querySelector(".text").innerHTML="";
      let div=document.createElement("div");
    div.classList.add("details");
    div.innerHTML=`<h2>Word:<span>${jsonData[0].word}</span></h2>
    <h4> <p>Meaning:</h4> <span>${jsonData[0].meanings[0].definitions[0].definition}.</span></p>
    <p><div>${jsonData[0].meanings[1].definitions[0].definition}</div></p>
    <h4><p>Example:</h4> <span>${jsonData[0].meanings[0].definitions[0].example==undefined?"Not Found":jsonData[0].meanings[0].definitions[0].example}</p>
    <h4><p>Synonyms:</h4><span>${jsonData[0].meanings[0].synonyms==""?"Not Found":jsonData[0].meanings[0].synonyms}</span></p>
    <h4><p>Antonyms:</h4><span>${jsonData[0].meanings[0].antonyms==""?"Not Found":jsonData[0].meanings[0].antonyms}</span><p>
    <a href=${jsonData[0].sourceUrls[0]} target="_blank">Read More</a>`
     document.querySelector(".text").appendChild(div);                 
     console.log(jsonData);
     console.log(jsonData[0].word);
     console.log(jsonData[0].meanings[0].definitions[0].definition);
}
searchBtn.addEventListener("click",function(){
    let searchValue=searchInput.value;
    if(searchValue==""){
        alert("First Enter Word");
    }else{
        getData(searchValue);
    }
})