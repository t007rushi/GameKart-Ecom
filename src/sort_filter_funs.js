
export const SorterFun = (data,sortby) =>{
    let prod = data
    if(sortby ==="ltoh"){
        prod = data.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
    }
    else if(sortby ==="htol"){
        prod = data.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );
    }
    else if(sortby ==="new"){
        prod = data.sort(
            (a, b) => parseFloat(b.released.getDate()) - parseFloat(a.released.getDate())
          );
    }
    else if(sortby ==="discount"){
        prod = data.sort(
            (a, b) => parseFloat(b.discount) - parseFloat(a.discount)
          );
    }
    return prod;

}
