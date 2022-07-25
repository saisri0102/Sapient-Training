// Debouncing - optimise performance
let counter = 0;
const getData = (value) => {
   counter++;
   console.log('Fetching data....', value, counter) 

}

const debounce = (fn, delay) => {
    let timer;
    return function(...params){
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(function(){
            fn.call(context, ...params)
        }, delay)
    }
}

const betterFunction = debounce(getData, 300);
