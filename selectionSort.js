//[3,6,8,2,4,9]
// run the loop  n-i-1 times

const selectionSort = (arr) => {
  for(let i=0; i<arr.length; i++){
    // find the max element in the remaining array and swap it with the 
      // correct index
    let lastIndex = arr.length - i - 1
    let maxIndex = getMaxIndex(arr,0,lastIndex)
    swap(arr,maxIndex,lastIndex)
  }
  return arr
}


const getMaxIndex = (arr,firstIndex,lastIndex) => {
  let maxIndex = firstIndex
  for(let i = 1; i<=lastIndex ; i++){
    if(arr[i]>arr[maxIndex]){
      maxIndex = i
    }
  }
  return maxIndex
}
const swap = (arr,index1,index2) => {
    temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  
}

const ans = selectionSort([0,3,7,9,4,5,-1])
console.log(ans)