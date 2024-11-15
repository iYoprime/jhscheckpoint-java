function insertionsort (arr){
    for (let i=1;i<arr.lenght;i++){
        let currentElement = arr[i];
        let j=i-1
        console.log(`Step ${i}: Inserting ${currentElement} into sorted part`);
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]; 
            j--; 
        }
        arr[j+1]=currentElement;
        console.log(`After Step ${i}: ${arr}`);

        

    }
    return arr;
    
}