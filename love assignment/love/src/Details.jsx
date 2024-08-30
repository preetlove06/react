import{loves} from './data.js';
function Details(props)
{
    // get the product id from props
    const {Item} =props;
 
    // find the product that match product id
    const love = loves.find(p => p.Item === Item);
return(
    <div>
        <h2>{love.Item}</h2>
        <h3>Class :{love.ObjectClass}</h3>
        <p>{love.description}</p>
        <p><img src={love.image} alt={love.Item}/></p>
       
    </div>
)
}
export default Details;