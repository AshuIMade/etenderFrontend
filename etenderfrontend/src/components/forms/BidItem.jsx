import { useDispatch } from 'react-redux'
import { deleteBid } from '../../features/bids/bidSlice'

function BidItem({ bid }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <button onClick={() => dispatch(deleteBid(bid._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default BidItem
