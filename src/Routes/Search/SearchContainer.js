import React, {
    Component
} from "react";
import SearchPresent from "./SearchPresent";

export default class extends Component {
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : "",
        loading : false,
        error : null
    };

    render() {
        const {movieResults, tvResults, searchTerm, loading, error} = this.state;
        return (
            <TVPresent movieResults={movieResults}, tvResults={tvResults}, searchTerm={searchTerm}, loading={loading}, error={error} />
        )
    }
}