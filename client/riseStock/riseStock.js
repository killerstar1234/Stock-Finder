
document.getElementById('button').addEventListener('click', () => {
    risingStocks();
})


function risingStocks() {

let input = document.getElementById('input').value;

document.getElementById('results').innerHTML = '';

if(input != '') {
    const url = `http://localhost:3000/stocksOnTheRise?percent=${input}`;
    fetch(url)
    .then(data=>{return data.json()})
    .then(res => {
        

        res.forEach((obj) => {

            let para = document.createElement('p');
            let node = document.createTextNode(`Symbol: (${obj.name}), Price: (${obj.currentPrice}), Percent: (${obj.percent}%), Netchange: (${obj.netchange})`)
            para.appendChild(node);

            document.getElementById('results').appendChild(para)

        })


    })  

    document.getElementById('input').innerHTML = '';
}





}

