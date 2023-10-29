import React, {useState,useEffect} from "react";
import WishListItem from "./WishListItem";
import Modal from "react-modal";


export default (props)=>{

    const [modalIsOpen, setIsOpen] = useState(false);



    const [itemName, setItemName] = useState("");
    const [itemDetail, setItemDetail] = useState("test");
    const [itemLink, setItemLink] = useState("");
    const [itemImagePath, setItemImagePath] = useState("");
    const [itemPrice, setItemPrice] = useState(0);


   

    const [items,setItems] = useState([]);
    
    const handleAddItem = ()=>{
        if(!itemDetail || !itemImagePath || !itemLink || !itemPrice || !itemName){
            return;
        }
        let newItems =[
            ...items, {
                id:Date.now().toString(36),
                itemname:itemName,
                imagepath: itemImagePath,
                description:itemDetail, 
                price:itemPrice,
                saved: 0,
                link:itemLink,
            }
        ]
        setItems(newItems)
        // add items to localstorage 

        localStorage.setItem("items", JSON.stringify(newItems));
        resetModal();
        closeModal();
    }

    function handleRemoveItem(itemid){
      
        //remove item of a given id
        let newItems = items.filter((item)=> {
            if(item.id != itemid){
                return item;
            }
        })
        setItems([ ...newItems]);

        //updating local storage
        localStorage.setItem("items", JSON.stringify(newItems));

    }

    function openModal() {
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
      }


      function resetModal()
      {
        setItemDetail("");
        setItemImagePath("");
        setItemLink("");
        setItemName("");
        setItemPrice(0);

      }

      useEffect(() => {

        let retrivedIitems = JSON.parse(localStorage.getItem('items'));

        if(!retrivedIitems) { retrivedIitems = [];}

        setItems(retrivedIitems );
      }, []);

    return (
    <div className="row">
    <div className="col-lg-8 mx-auto">
        <div className="row">
            <div className="col-md-12 ">
                <button className="btn  btn-dark mb-2 float-end" onClick={openModal}>Add new item</button>
            </div>
        </div>
        <Modal
        isOpen={modalIsOpen}
        show={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add new item"
        
        >
            <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add new item</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-md-8">
            <div className="mb-1">
                <label for="exampleFormControlInput1" className="form-label">Item Name</label>
                <input type="text" className="form-control"  placeholder="Enter Item Name" value={itemName}  onChange={(event)=>{
                   setItemName(event.target.value);
                }} required />
                </div>
                <div className="mb-1">
                <label for="exampleFormControlInput1" className="form-label">Image Path</label>
                <input type="url" className="form-control"  placeholder="Enter image url" value={itemImagePath} onChange={(event)=>{
                   setItemImagePath(event.target.value);
                }}   required/>
                </div>
                <div className="mb-1">
                <label for="exampleFormControlInput1" className="form-label">Item link</label>
                <input type="url" className="form-control"  placeholder="Enter link to item http://" value={itemLink} onChange={(event)=>{
                   setItemLink(event.target.value);
                }}  required/>
                </div>
                <div className="mb-1">
                <label for="exampleFormControlInput1" className="form-label">Price</label>
                <input type="number" className="form-control"  step="0.10" value={itemPrice} onChange={(event)=>{
                   setItemPrice(event.target.value);
                }} required/>
                </div>
                <div className="mb-1">
                <label for="exampleFormControlTextarea1" className="form-label">Item Detail</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={itemDetail} onChange={(event)=>{
                   setItemDetail(event.target.value);
                }}></textarea>
                </div>
            </div>
            <div className="col-md-4">
                {itemImagePath && <img src={itemImagePath}  width="200"/>}
             </div>
        </div>
      </div>
      <div className="modal-footer ">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button> &nbsp;
        <button type="button" className="btn btn-dark" onClick={handleAddItem}>Add</button>
      </div>
    </div>
  </div>
  
        </Modal>
        <WishListItem items={items} removeItem={handleRemoveItem} />
    </div>
    </div>
    );

}