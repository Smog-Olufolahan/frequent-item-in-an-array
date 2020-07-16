const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(arr) {
    let frequentItem = {};
    let mostFrequentItem = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if (!frequentItem[arr[i]]) {
            frequentItem[arr[i]] = 1;
        } else {
            ++frequentItem[arr[i]];
            if(frequentItem[arr[i]] > frequentItem[mostFrequentItem]) {
                mostFrequentItem = arr[i];
            }
        }
    }
    alert(mostFrequentItem, frequentItem[mostFrequentItem]); 
}

    