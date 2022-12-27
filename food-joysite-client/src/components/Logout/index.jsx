import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUser } from '../../app/api/auth';
import { userLogout } from '../../app/features/Auth/actions'

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    logoutUser()
    .then(_ => dispatch(userLogout()))
    .then(_ => navigate.push('/'));
  }, [dispatch, navigate])
  return (
    <div className="d-flex justify-content-center">
      <div className="text-center">
        <Spinner animation="grow" variant="danger"/>
        <p className="text-muted">Logout...</p>
      </div>
    </div>
  )
}
