async function getProduct(){

    /* the products will be shown are depends on the clicked category so the category will be variable 
       in the URL */ 
    const temp=new URLSearchParams(window.location.search);
    const catVar=temp.get('catValue');//to extract the catValue from URL
    const response=await fetch(`https://fakestoreapi.com/products/category/${catVar}`,{method:"GET"});
    const realData=await response.json();
  
    return realData;
     
}

async function displayProductsOfCategory(){

    const realData=await getProduct();
    const productWillBeAdded=realData.map(function(product){

        let pro=`<div class="product">

        <h1>${product.category}</h1>

        <p>${product.title}</p>
        <img src="${product.image}" />
        <p>${product.description}</p>
        <p>${product.price}</p>
        <p>${product.rating.rate}</p>
        <p>${product.rating.count}</p>
        
        </div>`;
       
        return pro;
       
    }).join('');


    document.querySelector(".cont").innerHTML=productWillBeAdded;
}
displayProductsOfCategory();