export default () => "Detail";import React, {
    Component
} from "react";
import DetailPresent from "./DetailPresent";

export default class extends Component {
    state = {
        result : null,
        error : null,
        loading : true
    };

    render() {
        const {result , error, loading} = this.state;
        return (
            <DetailPresent result={result} upcoming={upcoming} popular={popular} error={error} loading={loading} />
        )
    }
}