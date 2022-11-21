import React from "react";

class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.filter = this.props.filter;
    }
    updateFilter = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;
        this.filter[fieldName]=value
        this.props.onChange(this.filter)
    }

    render() {
        return (
            <form>
                <input
                    name ="filterText"
                    type="text"
                    placeholder="Search..."
                    onChange={this.updateFilter}
                    value={this.filter.filterText} />
                <p>
                    <input
                     name ="inStockOnly"
                        type="checkbox"
                        onChange={this.updateFilter}
                        checked={this.filter.inStockOnly} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar