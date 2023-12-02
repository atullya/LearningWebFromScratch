const arr=[1,2,3,4,5,6,7,8];
const newMappedarray_forEq=[]

for( let i=0; i<arr.length; i++ ){
    const el=arr[i]


    newMappedarray_forEq.push(el **2);
//Line no 8 is not used more so we use11 no line
}
const newMappedarray=arr.map(function(element){
    console.log(element);
    return element**2;
})
console.log(arr,newMappedarray)