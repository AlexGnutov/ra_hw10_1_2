import ServicesList from "./elements/services-list";
import ServicesForm from "./elements/services-form";
import FilterForm from "./elements/filter-form";

function ServicesListApp(props) {
    return (
        <div className={'container'}>
            <ServicesForm/>
            <FilterForm/>
            <ServicesList/>
        </div>
    )
}

export default ServicesListApp;
