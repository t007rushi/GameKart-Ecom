
export const SorterFun = (data,sortby) =>{
    let prod = data
    if(sortby ==="lowtohigh"){
        prod = data.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
    }
    else if(sortby ==="hightolow"){
        prod = data.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );
    }
    else if(sortby ==="new_arive"){
        prod = data.sort(
            (a, b) => parseFloat(b.released.getDate()) - parseFloat(a.released.getDate())
          );
    }
    else if(sortby ==="highdiscount"){
        prod = data.sort(
            (a, b) => parseFloat(b.discount) - parseFloat(a.discount)
          );
    }
    return prod;

}
