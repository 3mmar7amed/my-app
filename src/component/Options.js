/*
this component is responsible for rendering the product options 
*/
import ShowBook from './ShowBook' 
import ShowDVD from './ShowDVD' 
import ShowFurniture from './ShowFurniture' 

const Options = ({Value , ReturnedData , indicatedType } )=> {
    const Data = (data) => {
        ReturnedData(data)
    }
    const validDateTypes = (type)=> {
        indicatedType(type)
    }

    return (
        <>
    {Value === 'DVD' && <ShowDVD DVDdata = {Data} Type = {validDateTypes}  />}
    {Value === 'Book' && <ShowBook BookData = {Data} Type = {validDateTypes} />}
    {Value === 'Furniture' && <ShowFurniture FurnitureData = {Data} Type = {validDateTypes} />}
        </>
    )

}
export default Options ; 