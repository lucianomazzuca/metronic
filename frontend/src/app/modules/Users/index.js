import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from './_redux/Actions';
import { bindActionCreators } from 'redux';
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { UserTable } from './components/UserTable';
import { UserEditDialog } from './components/UsersEditDialog';

const User = (props) => {
    const [ isLoading, setLoading ] = useState(true)
    const [ usersData, setUsers ] = useState([])
    const [ selectedUser, setSelectedUser ] = useState(null)
    const [ showEditDialog, setShowEditDialog ] = useState(false);

    const getUsers = async() => {
        let getAllUsers = await props.getUsers(props.buUser);
        setUsers(getAllUsers)
        setLoading(false)
    }

    const reload = async () => {
        setLoading(true)
        setShowEditDialog(false)
        await getUsers()
    }

    React.useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Card>
                <CardHeader title="Listado de usuarios">
                    <CardHeaderToolbar>
                        <button
                            type="button"
                            className="btn btn-primary"
                        //  onClick={}
                        >
                            Nuevo Usuario
                        </button>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <UserTable entities={usersData} isLoading={isLoading} setShowEditDialog={setShowEditDialog} setSelectedUser={setSelectedUser}/>
                    { selectedUser &&
                        <UserEditDialog user={selectedUser} reload={reload} show={showEditDialog} setShowEditDialog={setShowEditDialog} updateUser={props.updateUser}/>
                    }
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