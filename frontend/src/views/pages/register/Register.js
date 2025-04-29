import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilLockLocked, cilEnvelopeOpen } from '@coreui/icons'


const Register = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Registro</h1>
                    <p className="text-body-secondary">Crea tu cuenta</p>


                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Nombre completo" autoComplete="name" />
                    </CInputGroup>


                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeOpen} />
                      </CInputGroupText>
                      <CFormInput type="email" placeholder="Correo electrónico" autoComplete="email" />
                    </CInputGroup>


                    <CInputGroup className="mb-3">
                      <CInputGroupText>Rol</CInputGroupText>
                      <CFormSelect>
                        <option>Selecciona un rol</option>
                        <option>Administrador</option>
                        <option>Soporte</option>
                        <option>Tecnico</option>
                        <option>Supervisor</option>
                        <option>Cliente</option>
                      </CFormSelect>
                    </CInputGroup>


                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                      />
                    </CInputGroup>


                    <CRow>
                      <CCol xs={6}>
                        <CButton color="success" className="px-4">
                          Registrarme
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/login">
                          <CButton color="link" className="px-0">
                            ¿Ya tienes cuenta?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}


export default Register


