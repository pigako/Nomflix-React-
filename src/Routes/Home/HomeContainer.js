import React, {
    Component
} from "react";
import HomePresent from "./HomePresent";

export default class extends Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error : null,
        loading : true
    };

    render() {
        const {nowPlaying, upcoming, popular, error, loading} = this.state;
        return (
            <HomePresent nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
        )
    }
}