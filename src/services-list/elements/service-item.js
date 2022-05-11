import {useDispatch} from "react-redux";
import {deleteService, editService} from "../slice/services-slice";

function ServiceItem(props) {
    const {title, price, id} = props;
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(editService(id));
    }
    const deleteHandler = () => {
        dispatch(deleteService(id));
    }

    return (
        <>
            <span>{title} </span>
            <strong><span>{price} </span></strong>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </>
    )
}

export default ServiceItem;
