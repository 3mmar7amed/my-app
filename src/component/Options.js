
import ShowBook from './ShowBook' 
import ShowDVD from './ShowDVD' 
import ShowFurniture from './ShowFurniture' 

const Options = ({Value , ReturnedData , state} )=> {
    const Data = (data) => {
        ReturnedData(data)
    }
    return (
        <>
    {Value === 'DVD' && <ShowDVD DVDdata = {Data}  />}
    {Value === 'Book' && <ShowBook BookData = {Data}  />}
    {Value === 'Furniture' && <ShowFurniture FurnitureData = {Data} />}
        </>
    )

}
export default Options ; 