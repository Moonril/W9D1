import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return (
            <img src={this.props.cats} />
        )
    }
}
export default ImageComponent