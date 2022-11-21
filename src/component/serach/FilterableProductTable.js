import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filter: {
                filterText: '',
                inStockOnly: false
            }
        };
    }

    setFilter = (filter) => {
        this.setState(filter)
    }

    render() {

        return (
            <div>
                <SearchBar
                    onChange={this.setFilter}
                    filter={this.state.filter}
                />
                <ProductTable
                    products={this.props.products}
                    filter={this.state.filter}
                />
            </div>
        )
    }
}
export default FilterableProductTable