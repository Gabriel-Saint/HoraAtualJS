const datahtml = document.querySelector('.xxx');

function Data(){
    const data = new Date();
    return data.toLocaleDateString('pt-BR');
}
let DD = Data();
datahtml.innerHTML = `${DD}`;
/*function hora(){
    const hhtml = document.querySelector('.yyy');
    let Hora = new Date();
    Hora.toLocaleTimeString('pt-BR',{hour12: false})
    hhtml.innerHTML = `${Hora}`;
}
*/
const currentTime = () =>{
    const hhtml = document.querySelector('.yyy');
    let dt = new Date();
    let hh = dt.getHours();
    let mm = dt.getMinutes();
    let ss = dt.getSeconds();

    hh = hh < 10 ? `0${hh}`: hh;
    mm = mm < 10 ? `0${mm}`: mm;
    ss = ss < 10 ? `0${ss}`: ss;

    let time = `${hh}:${mm}:${ss}`;
    hhtml.innerHTML = time;

}
setInterval(currentTime);
