let usuario
console.log('mensaje 1');
console.log('mensaje 2');
console.log('mensaje 3');
setTimeout(() => {
    usuario='🧒'
    console.log('mensaje 4');
    
}, 5000);
console.log('mensaje 5');
console.log(usuario);


const promise=new Promise((resolve,reject)=>{
        resolve('success')
        reject('failure')
})
const doPromise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                const skills=['HTML','CSS','JS']
                if (skills.includes('Node')) {
                    resolve(skills)
                } else {
                    reject('Surgió algún problema')
                }
            }, 2000);
})

doPromise
.then(response =>{console.log(response);
})
.catch(data=>{console.log(data);
})

https://restcountries.com/v2/all

fetch(url)
.then(respuesta=> respuesta.json())
.then(data=> console.log(data))
.catch(error=> console.error(error));

const url1='https://rickandmortyapi.com/api/character'
fetch(url1)
.then(respuesta=>respuesta.json())
.then(data=>console.log(data.results))
.catch(error=> console.error(error));

const url='https://restcountries.com/v2/all'
const fetchData= async () => {
    try {
        const respuesta= await fetch(url)
        const countries= await respuesta.json() 
        console.log(countries);
    } catch (error) {
        console.error(error);
    }
}

fetchData()

































