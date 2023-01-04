import React from 'react'
import { connect } from 'react-redux'
import * as actions from './_redux/Actions';
import { bindActionCreators } from 'redux';
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { UsersFilter } from './components/UsersFilter';
import { UsersTable } from './components/UsersTable';

const users = [
    {
        id: 1,
        name: 'test',
        isAdmin: true
    },
    {
        id: 2,
        name: 'test2',
        isAdmin: true
    },
    {
        id: 3,
        name: 'test3',
        isAdmin: true
    },
    {
        id: 4,
        name: 'test4',
        isAdmin: true
    }
]

const User = (props) => {
    const [ usersData, setUsers ] = React.useState([])

    const getUsers = async() => {
        let getAllUsers = await props.getUsers(props.buUser);
        setUsers(getAllUsers)
        // setLoading(false)
    }
    React.useEffect(() => {
        getUsers()
    },[])


    return (
        <>
            <Card>
                <CardHeader title="Listado de usuarios">
                    <CardHeaderToolbar>
                        <button
                            type="button"
                            className="btn btn-primary"
                        // onClick={}
                        >
                            Nuevo Usuario
                        </button>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <UsersFilter />
                    <UsersTable entities={usersData} />
                    {/* {customersUIProps.ids.length > 0 && <CustomersGrouping />} */}
                </CardBody>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);