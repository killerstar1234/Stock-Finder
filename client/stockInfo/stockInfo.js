document.getElementById('button').addEventListener('click', () => {
    getInfo();
})

function getInfo() {
    let input = document.getElementById('input').value;

    if(input != "") {


        document.getElementById('results').innerHTML = '';


        const url = `http://localhost:3000/moreInfo?name=${input}`;
        fetch(url)
        .then(data=>{return data.json()})
        .then(res => {

            if(res.request) {
                let para = document.createElement('p');
                let node = document.createTextNode('Invalid Request');
                para.appendChild(node);

                document.getElementById('results').appendChild(para);
            } else {


            res.forEach(arr => {

                if(arr.type === 'defaultKeyStatistics') {
                let para = document.createElement('p');
                let node = document.createTextNode(`Company Value: (${arr.enterpriseValue}), Dividend Quarter Value: (${arr.lastDividendValue})`);
                para.appendChild(node);

                let div = document.createElement('div');
                div.appendChild(para);

                document.getElementById('results').appendChild(div);
                }

                if(arr.type === 'price') {
                let para = document.createElement('p');
                let node = document.createTextNode(`Short Name: (${arr.shortName}), Symbol: (${arr.symbol})`)
                para.appendChild(node);

                document.getElementById('results').appendChild(para);
                }

                if(arr.type === 'summaryDetail') {
                let para = document.createElement('p');
                let node = document.createTextNode(`Close Price: (${arr.closePrice}), Open Price: (${arr.openPrice})`)
                para.appendChild(node);

                document.getElementById('results').appendChild(para);
                }

                if(arr.type === 'financialData') {
                let para = document.createElement('p');
                let node = document.createTextNode(`Current Price: (${arr.currentPrice}), Currency Type: (${arr.financialCurrency}), grossMargins: (${arr.grossMargins}), grossProfits: (${arr.grossProfits}), Key: (${arr.recommendationKey})`)
                para.appendChild(node);

                document.getElementById('results').appendChild(para);
                }

                if(arr.type === 'esgScores') {
                let para1 = document.createElement('p');
                let node1 = document.createTextNode(`Adult: (${arr.adult}),`)
                para1.appendChild(node1);
                
                let para2 = document.createElement('p');
                let node2 = document.createTextNode(`Alcoholic: (${arr.alcoholic}),`)
                para2.appendChild(node2);

                let para3 = document.createElement('p');
                let node3 = document.createTextNode(`Animal Testing: (${arr.animalTesting}),`)
                para3.appendChild(node3);

                let para4 = document.createElement('p');
                let node4 = document.createTextNode(`Catholic: (${arr.catholic}),`)
                para4.appendChild(node4);

                let para5 = document.createElement('p');
                let node5 = document.createTextNode(`Coal: (${arr.coal}),`)
                para5.appendChild(node5);

                let para6 = document.createElement('p');
                let node6 = document.createTextNode(`Controversial Weapons: (${arr.controversialWeapons}),`)
                para6.appendChild(node6);

                let para7 = document.createElement('p');
                let node7 = document.createTextNode(`Leather: (${arr.furLeather}),`)
                para7.appendChild(node7);

                let para8 = document.createElement('p');
                let node8 = document.createTextNode(`Gambling: (${arr.gambling}),`)
                para8.appendChild(node8);

                let para9 = document.createElement('p');
                let node9 = document.createTextNode(`gmo: (${arr.gmo}),`)
                para9.appendChild(node9);

                let para10 = document.createElement('p');
                let node10 = document.createTextNode(`Military Contract: (${arr.militaryContract}),`)
                para10.appendChild(node10);

                let para11 = document.createElement('p');
                let node11 = document.createTextNode(`Nuclear: (${arr.nuclear}),`)
                para11.appendChild(node11);

                let para12 = document.createElement('p');
                let node12 = document.createTextNode(`Palm Oil: (${arr.palmOil}),`)
                para12.appendChild(node12);

                let para13 = document.createElement('p');
                let node13 = document.createTextNode(`Pesticides: (${arr.pesticides}),`)
                para13.appendChild(node13);

                let para14 = document.createElement('p');
                let node14 = document.createTextNode(`Small Arms: (${arr.smallArms}),`)
                para14.appendChild(node14);

                let para15 = document.createElement('p');
                let node15 = document.createTextNode(`Tobacco: (${arr.tobacco})`)
                para15.appendChild(node15);

            

                document.getElementById('results').appendChild(para1);
                document.getElementById('results').appendChild(para2);
                document.getElementById('results').appendChild(para3);
                document.getElementById('results').appendChild(para4);
                document.getElementById('results').appendChild(para5);
                document.getElementById('results').appendChild(para6);
                document.getElementById('results').appendChild(para7);
                document.getElementById('results').appendChild(para8);
                document.getElementById('results').appendChild(para9);
                document.getElementById('results').appendChild(para10);
                document.getElementById('results').appendChild(para11);
                document.getElementById('results').appendChild(para12);
                document.getElementById('results').appendChild(para13);
                document.getElementById('results').appendChild(para14);
                document.getElementById('results').appendChild(para15);
                }

                if(arr.type === 'summaryProfile') {
                let para1 = document.createElement('p');
                let node1 = document.createTextNode(`Address: ${arr.summaryProfile.address1}`)
                para1.appendChild(node1);

                let para2 = document.createElement('p');
                let node2 = document.createTextNode(`City: ${arr.summaryProfile.city}`)
                para2.appendChild(node2);

                let para3 = document.createElement('p');
                let node3 = document.createTextNode(`Country: ${arr.summaryProfile.country}`)
                para3.appendChild(node3);

                let para4 = document.createElement('p');
                let node4 = document.createTextNode(`Full Time Employees: ${arr.summaryProfile.fullTimeEmployees}`)
                para4.appendChild(node4);

                let para5 = document.createElement('p');
                let node5 = document.createTextNode(`Industry: ${arr.summaryProfile.industry}`)
                para5.appendChild(node5);

                let para6 = document.createElement('p');
                let node6 = document.createTextNode(`Summary: ${arr.summaryProfile.longBusinessSummary}`)
                para6.appendChild(node6);

                let para7= document.createElement('p');
                let node7 = document.createTextNode(`Phone Number: ${arr.summaryProfile.phone}`)
                para7.appendChild(node7);

                let para8 = document.createElement('p');
                let node8 = document.createTextNode(`Sector: ${arr.summaryProfile.sector}`)
                para8.appendChild(node8);

                let para9 = document.createElement('p');
                let node9 = document.createTextNode(`State: ${arr.summaryProfile.state}`)
                para9.appendChild(node9);

                let para10 = document.createElement('p');
                let node10 = document.createTextNode(`Website: ${arr.summaryProfile.website}`)
                para10.appendChild(node10);

                let para11 = document.createElement('p');
                let node11 = document.createTextNode(`Zip: ${arr.summaryProfile.zip}`)
                para11.appendChild(node11);


                document.getElementById('results').appendChild(para1);
                document.getElementById('results').appendChild(para2);
                document.getElementById('results').appendChild(para3);
                document.getElementById('results').appendChild(para4);
                document.getElementById('results').appendChild(para5);
                document.getElementById('results').appendChild(para6);
                document.getElementById('results').appendChild(para7);
                document.getElementById('results').appendChild(para8);
                document.getElementById('results').appendChild(para9);
                document.getElementById('results').appendChild(para10);
                document.getElementById('results').appendChild(para11);
                }

            })


        }

        })

document.getElementById('input').innerHTML = '';
    }

}