import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTender } from '../../features/tenders/tenderSlice'

import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

function TenderForm() {
  const [title, setTitle] = useState('')
  const [vendorName, setVendorName] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [attachment, setAttachment] = useState('')
  const [issuedDate, setIssuedDate] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());
  const [status, setStatus] = useState(true);

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    const tender = {
    title,vendorName,type,status,description,attachment,issuedDate,expDate
    }
    console.log(tender)
  
    dispatch(createTender(tender))
    setTitle('')
    setVendorName('')
    setType('')
    setDescription('')
    setAttachment('')
    setStatus(true)
    setIssuedDate({})
    setExpDate({})
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>        
        <div className='form-group'>
          <label htmlFor='text'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>vendor</label>
          <input
            type='text'
            name='vendorName'
            id='vendorName'
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
          />
        </div>
          <div className='form-group'>
          <label htmlFor='text'>Type</label>
          <input
            type='text'
            name='type'
            id='type'
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
          <div className='form-group'>
          <label htmlFor='text'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Attachment</label>
          <input
            type='text'
            name='attachment'
            id='attachment'
            value={attachment}
            onChange={(e) => setAttachment(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Issued Date</label>
          <DatePicker  onChange={(e) => setIssuedDate(e)}  selected={issuedDate} />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Expiration Date</label>
          <DatePicker onChange={(e) => setIssuedDate(e)} selected={expDate} />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Tender
          </button>
        </div>
      </form>
    </section>
  )
}

export default TenderForm
