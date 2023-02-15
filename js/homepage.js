var firstBlock = document.getElementById("firstBlock");

async function productDetails() {
  let url = `https://6350df063e9fa1244e4f2704.mockapi.io/productsdata`;
  let data = await fetch(url);
  let res = await data.json();
  console.log(res);
  console.log(res[0].images[0]);
  res.map((element,index) => {
 
    firstBlock.innerHTML += `
        <div id="title${index}"class="card-body border  mt-3 me-3 p-0" style="width: 12rem; height: 16rem;" onclick="productInfo('${element.description}','${index}','${element.title}','${element.category}','${element.price}','${element.rating}','${element.images[0]}')">
                                <div class="text-center "><img class='img-fluid' style="object-fit: contain; height:10rem;"src=${element.images[0]} alt=""></div>
                                <div class="mb-1 text-center"><b>${element.category}</b></div>
                                <div class=" mb-1 text-center text-success">50 - 80%+Extra10% Off</div>
                                <div class="text-muted text-center">Harpa, Amante, Chemistry...</div>
                            </div>

                        `;
  });
}

productDetails();

function productInfo(desc,index,title,category,price,rating,img){
    var productTitle=document.getElementById(`title${index}`)
    console.log(desc)
    console.log(productTitle)
    productTitle.innerHTML = `
    <div class="text-center "><img class='img-fluid' style="object-fit: contain; height:5rem;"src=${img} alt=""></div>
                                    <div class="text-muted text-center">${title}</div>
                                    <div class="mb-1 text-center"><b>⭐⭐${rating}⭐⭐</b></div>
                                    <div class="mb-1 text-center text-success" style="font-size: 12px";>${desc}</div>
                                    <div class="text-muted text-center">Rs.<b>${price}/-</b></div>
                                
                                

                            `;
  }
