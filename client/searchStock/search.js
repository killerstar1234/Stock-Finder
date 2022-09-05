let divARR = [];

document.getElementById('button').addEventListener('click', () => {
    search();
})

function search() {
    
    let input = document.getElementById('searchBAR').value;

    if(input != "") {
        
document.getElementById('results').innerHTML = ''

        const url = `http://localhost:3000/search?name=${input}`;
        fetch(url)
        .then(data=>{return data.json()})
        .then(res => {

            res.forEach((obj, i) => {
                // i starts at 0
                divARR.push(i);
                
                let para = document.createElement("p");
                let node = document.createTextNode(`Name: (${obj.name}), Trading Name: (${obj.symbol})`)
                para.appendChild(node);

                let div = document.createElement(`div`);
                div.id = `div${i}`
                div.appendChild(para);

                document.getElementById('results').appendChild(div);
            
            })
        })
        document.getElementById('input').innerHTML = '';
    }

}