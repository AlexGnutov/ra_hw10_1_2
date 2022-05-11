import {useDispatch} from "react-redux";
import {useRef} from "react";
import {addFilter} from "../slice/services-slice";

function FilterForm(props) {
    const dispatch = useDispatch();
    const filterRef = useRef();

    const inputHandler = () => {
        if (filterRef.current?.value === '') {
            dispatch(addFilter(null));
        } else {
            dispatch(addFilter(filterRef.current?.value));
        }
    }

    return (
        <form className={'filter-form'}>
            <label htmlFor={'filter'}>Filter: </label>
            <input onChange={inputHandler} type={'text'} name={'filter'} ref={filterRef}/>
        </form>
    )
}

export default FilterForm;
