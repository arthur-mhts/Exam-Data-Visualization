function twoSum(array, target) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        if ((map.has(complement)) && (map.get(complement) !== i)) { //Ici on regarde si le complement est dans le tableau et si sa position est differente de celle du chiffre complementaire 
            return [map.get(complement), i]; //Si c'est bon on récupère sa position 
        }
        map.set(array[i], i);
    }
    return [];
}

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));

let nums1 = [3,2,4];
let target1 = 6;
console.log(twoSum(nums1, target1));

let nums2 = [3,3];
let target2 = 6;
console.log(twoSum(nums2, target2));

