import React from 'react'
import { ErrorBar, ErrorBox } from './styles'
import { MdError } from 'react-icons/md';

const Error = ({error}) => {
  return (
      <>
        <ErrorBox>
          <MdError size={21} />
          <p>{error}</p>          
      </ErrorBox>
      <ErrorBar />
      </>
      
  )
}

export default Error