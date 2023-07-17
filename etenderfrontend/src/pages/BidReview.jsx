import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import { updateBid} from '../features/bids/bidSlice'

//grade bid (give rank to bids)
function BidReview(props) {
    const location = useLocation();
    const data = location.state;

  const [formData, setFormData] = useState({
    rank: '',
    })

  const { rank } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
        const updatedBid= {
          id: data.id,
          vendorName:data.vendorName,
          reference: data.reference,
          description: data.description,
          attachment:data.attachment,
          price: data.price,
          reviwed: true,
          rank
      }
      dispatch(updateBid(updatedBid,updatedBid.id))  
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Review Bid
        </h1>
        <p>Please Fill The Grade</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
           <div className='form-group'>
            <label htmlFor='text'>Rank</label>
            <input
              type='text'
              className='form-control'
              id='rank'
              name='rank'
              value={rank}
              placeholder='Rank this bid '
              onChange={onChange}
            />
          </div>
            <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default BidReview
