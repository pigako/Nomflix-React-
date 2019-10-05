import React, {
    Component
} from "react";
import TVPresent from "./TVPresent";

export default class extends Component {
    state = {
        topRated : null,
        popular : null,
        airingToday : null,
        loading : true,
        error : null
    };

    render() {
        const {topRated, popular, airingToday, loading, error} = this.state;
        return (
            <TVPresent topRated={topRated} popular={popular} airingToday={airingToday} loading={loading} error={error} />
        )
    }
}