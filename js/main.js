/*fetch('https://rickandmortyapi.com/api/character')
.then((v)=>v.json())
.then((d)=>showData(d.results))
.catch((error)=>console.log(error));

function showData(data){
    
    data.forEach(element => {
        const li=document.createElement('li');
        const img =document.createElement('img');
        const h2=document.createElement('h2');

        img.src=element.image;
        h2.textContent=element.name;

        li.append(img,h2);
        list.appendChild(li);
    });
}*/

/*getData();

async function getData() {
    try{
        const data= await fetch('https://rickandmortyapi.com/api/character');
        const jsonData = await data.json() 

        jsonData.results.forEach(el => {
            const li = document.createElement('li')
            const h5 = document.createElement('h5')
            const img = document.createElement('img')
            const h6 = document.createElement('h6')

            img.src = el.image
            h5.textContent = el.name
            h6.textContent = el.gender
            li.append(img,h5,h6)
            list.appendChild(li)
        });

    }
    catch(e) {
            alert(e.message)
    }
}*/

function selectTab(selectedTab) {
    // Elimina la clase 'active' de todas las pestañas
    let tabs = document.querySelectorAll('.tab');
    const estado = selectedTab.id;
    alert("el estado es:" + estado)
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    // Agrega la clase 'active' a la pestaña seleccionada
    selectedTab.classList.add('active');
    console.log(getDataTotal(estado))
    
  }
/* ---------------------------------------------------------------- */
const table = document.querySelector("#promesas")

  async function getData() {
    try{
        const data= await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await data.json() 
        
          jsonData.forEach(el => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const img = document.createElement('img')
            img.src = "./images/Garbage.png" 
            img.style.width= "25px"
            img.style.height="25px"
            td1.style.width ="85%"
            td1.textContent = el.title 
            td2.style.widows="15%"
            td2.append(img);
            tr.append(td1,td2)
            table.appendChild(tr)          
        });
    }
    catch(e) {
            alert(e.message)
    }
}

console.log(getData())

async function getDataTotal(estado) {
    try{
        const data= await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await data.json() 
        jsonData.forEach(el => {

        
                    const tr = document.createElement('tr')
                    const td1 = document.createElement('td')
                    const td2 = document.createElement('td')
                    const img = document.createElement('img')
        
                    img.src = "./images/Garbage.png" 
                    img.style.width= "25px"
                    img.style.height="25px"
                    td1.style.width ="85%"
                    td1.textContent = arreEl.title 
                    td2.style.widows="15%"
                    td2.append(img);
                    tr.append(td1,td2)
                    table.appendChild(tr)                  
                } )   
    }
    catch(e) {
            alert(e.message)
    }
}
