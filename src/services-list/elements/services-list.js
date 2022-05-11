import ServiceItem from "./service-item";
import {useSelector} from "react-redux";

function ServicesList(props) {
    const items = useSelector(state => state.services.items)
    const filterWord = useSelector(state => state.services.filterWord);

    return (
        <div className={'service-list-container'}>
            <ul>
                {filterWord ?
                    items.filter(item => item.title.toLowerCase().includes(filterWord.toLowerCase()))
                        .map(item =>
                            <li key={item.id}>
                                <ServiceItem {...item}/>
                            </li>)
                    : items.map(item =>
                        <li key={item.id}>
                            <ServiceItem {...item}/>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ServicesList;
