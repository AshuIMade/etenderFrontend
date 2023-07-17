import { useDispatch } from 'react-redux'
import { deleteTender } from '../../features/tenders/tenderSlice'

function TenderItem({ tender }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(tender.issuedDate).toLocaleString('en-US')}</div>
      <h2>{tender.text}</h2>
      <button onClick={() => dispatch(deleteTender(tender._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default TenderItem
