import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userDetails } from '../Data'
import BarGraph from './BarGraph'
import LineGraph from './LineGraph'
import PolarGraph from './PolarGraph'

class Details extends Component {
    state = {
        userDetails: {}
    }

    componentDidMount() {
        userDetails(this.props.match.params.id)
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    userDetails: res
                })
            })
    }

    render() {
        const { name, email, phone, linkedIn, attendance, github } = this.state.userDetails
        console.log(this.state.userDetails)
        return (
            <div >

                <div class="card">
                    <h1>{name}</h1>
                    <p className="title">Email :{email}</p>
                    <p className="title">Mobile :{phone}</p>
                    <p className="title" style={{ cursor: 'pointer' }}>LinkedIn :<a href={linkedIn} className="title">{linkedIn}</a></p>
                </div>

                <div className='center-details'>

                    <div style={{ width: '80%', height: '80%', padding: '15px' }}>
                        <BarGraph data={attendance} />
                    </div>

                    <div style={{ width: '80%', height: '80%', padding: '15px' }}>
                        <LineGraph data={github} />
                    </div>
                    <div style={{ width: '80%', height: '80%', padding: '15px' }} >
                        <PolarGraph data={github} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state,
    }
}

export default withRouter(connect(mapStateToProps)(Details))