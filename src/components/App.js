import React, {Component} from "react";
import {changeFirstname, changeLastName} from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class App extends Component {
    render() {
        const {changeFirst, changeLast, firstName, lastName} = this.props;
        return (
            <div>
                <h2>{firstName && lastName ? `${firstName} ${lastName}` : "Please text your name"}</h2>
                <input onChange={(e) => changeFirst(e.target.value)} type="text" />
                <input onChange={(e) => changeLast(e.target.value)} type="text" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.nameReducer.firstName,
        lastName: state.nameReducer.lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFirst: bindActionCreators(changeFirstname, dispatch),
        changeLast: bindActionCreators(changeLastName, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
