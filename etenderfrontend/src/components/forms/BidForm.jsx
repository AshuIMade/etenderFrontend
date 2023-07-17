import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBid } from '../../features/bids/bidSlice'


function BidForm() {
  const [vendorName, setVendorName] = useState('')
  const [reference, setReference] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [attachment, setAttachment] = useState('')
  const [reviwed, setReviwed] = useState(false)
  
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    const bid = {
    vendorName,reference,price,description,attachment,reviwed
    }
    
    console.log(bid)
  
    dispatch(createBid(bid))
    setVendorName('')
    setReference('')
    setPrice('')
    setDescription('')
    setAttachment('')
    setReviwed(false)
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Vendor</label>
          <input
            type='text'
            name='vendorName'
            id='vendorName'
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Reference</label>
          <input
            type='text'
            name='reference'
            id='reference'
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </div>
          <div className='form-group'>
          <label htmlFor='text'>price</label>
          <input
            type='text'
            name='price'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
          <button className='btn btn-block' type='submit'>
            Add Tender
          </button>
        </div>
      </form>
    </section>
  )
}

export default BidForm
