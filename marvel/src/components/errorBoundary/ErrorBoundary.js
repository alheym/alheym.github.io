
import { Component } from "react";
import ErrorMesssage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMesssage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;