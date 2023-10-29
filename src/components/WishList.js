import React, {useState} from "react";
import WishListItem from "./WishListItem";


export default (props)=>{

    const [items,setItems] = useState(
  [
        {
            id:1,
            itemname:"Haier Thermocool 146 Litres Chest Freezer (HTF-150) - Silver + 3 Years Warranty",
            imagepath: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/7813011/1.jpg?5779",
            description:`150 Liters capacity (146 liters Storage Volume)
            Dimension (W*D*H) - 720*520*845
            Super Freezing
            Anti-rust protected
            LED light
            Safety door lock
            Low noise operation
            75mm insulation thickness`,
            price:180000,
            saved: 0,
            link:"https://www.jumia.com.ng/haier-thermocool-146-litres-chest-freezer-htf-150-silver-3-years-warranty-110318763.html",
        },
        {
            id:2,
            itemname:"Haier Thermocool 146 Litres Chest Freezer (HTF-150) - Silver + 3 Years Warranty",
            imagepath: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/7813011/1.jpg?5779",
            description:`150 Liters capacity (146 liters Storage Volume)
            Dimension (W*D*H) - 720*520*845
            Super Freezing
            Anti-rust protected
            LED light
            Safety door lock
            Low noise operation
            75mm insulation thickness`,
            price:180000,
            saved: 0,
            link:"https://www.jumia.com.ng/haier-thermocool-146-litres-chest-freezer-htf-150-silver-3-years-warranty-110318763.html",
        }
    ]);


    function handleRemoveItem(itemid){
      
        //remove item of a given id
        let newItems = items.filter((item)=> {
            if(item.id != itemid){
                return item;
            }
        })
        setItems([ ...newItems]);
    }

    return (
    <div className="row">
    <div className="col-lg-8 mx-auto">
        <div className="row">
            <div className="col-md-12 ">
                <button className="btn  btn-dark mb-2 float-end">Add new item</button>
            </div>
        </div>

      
        <WishListItem items={items} removeItem={handleRemoveItem} />
    </div>
    </div>
    );

}