import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleUserDetail } from '../actions/index'
import { withRouter } from 'react-router-dom'

class Home extends Component {

    handleClick = (id) => {
        this.props.dispatch(handleUserDetail(id))
        if (localStorage.getItem('token')) {
            this.props.history.push(`/details/${id}`)
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        console.log(this.props)
        const { users } = this.props
        return (
            <Fragment>
                <ul>
                    {users && users.map(e => (
                        <li  key={e.id} onClick={() => this.handleClick(e.id)}>
                            {e.name}
                        </li>
                    ))}
                </ul>
            </Fragment>

        )
    }
}

function mapStateToProps(state) {
    return {
        ...state,
        users: state.users.allUsers
    }
}

export default withRouter(connect(mapStateToProps)(Home))