let role = "Admin";
let subscripsion = "free";
let productStatus ="available";

if(role==="Admin"){
    console.log("Polniy dostup");
}else if(role==="user") {
    console.log("Ogranicheny dostp");
}else if(role==="guest"){
    console.log("Tolko prosmotr");

}



switch(subscription){
    case "free":
        console.log("Minimum funksiy");
        break;
        case "pro":
        console.log("Polniy dostup");
        break;
        case "enterprice":
        console.log("Vip-poderzhka");
}
if(productStatus==="available" && (subscription==="pro" ||subscription==="enterprise")){
    console.log("Mozhno zakazat");
}else if(productStatus==="sale"&& (role==="user" ||role==="guest")){
    console.log("Dostuonaya aksiya");

}else if(productStatus==="out-of-stock"){
    console.log("Tovar nedostupen");
}