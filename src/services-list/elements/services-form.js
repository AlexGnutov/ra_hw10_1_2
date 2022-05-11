import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addService, clearEdited, updateService} from "../slice/services-slice";

function ServicesForm() {
    const dispatch = useDispatch();
    const titleRef = useRef();
    const priceRef = useRef();
    const editData = useSelector(state => state.services.edited) || {title: '', price: '', id: null};

    const submitHandler = (e) => {
        e.preventDefault();
        if (!editData.id) {
            const data = {
                title: titleRef.current?.value,
                price: priceRef.current?.value,
            };
            dispatch(addService(data));
        } else {
            const updateData = {
                title: titleRef.current?.value,
                price: priceRef.current?.value,
                id: editData.id,
            };
            dispatch(updateService(updateData));
        }
        titleRef.current.value = '';
        priceRef.current.value = '';
    }

    const cancelHandler = () => {
        dispatch(clearEdited());
    }

    return (
        <form key={editData.id} className={'services-form'} onSubmit={submitHandler}>
            <div className={'form-column'}>
                <label className={'form-label'} htmlFor={'title'}>Service title:</label>
                <input type={'text'} name={'title'} defaultValue={editData.title}
                       ref={titleRef} minLength={7} maxLength={25} required />
            </div>
            <div className={'form-column'}>
                <label className={'form-label'} htmlFor={'price'}>Service price:</label>
                <input type={'number'} name={'price'} defaultValue={editData.price}
                       ref={priceRef} min={0} max={100000} step={1} required />
            </div>
            <div className={'form-column'}>
                <button type={'submit'}>Save</button>
            </div>
            <div className={'form-column'}>
                {editData.id ?
                    <button type={'button'} onClick={cancelHandler}>Cancel</button>
                    : null
                }
            </div>
        </form>
    )
}

export default ServicesForm;
