import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BidForm from '../components/forms/BidForm'
import BidItem from '../components/forms/BidItem'
import Spinner from '../components/Spinner'
import { getBids, reset } from '../features/bids/bidSlice'

//submit bid 
function Bid() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { bids, isLoading, isError, message } = useSelector(
    (state) => state.bids
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getBids())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Fill The Bid Form</p>
      </section>
      <BidForm />
      <section className='content'>
        {bids.length > 0 ? (
          <div className='goals'>
            {bids.map((bid) => (
              <BidItem key={bid._id} bid={bid} />
            ))}
          </div>
        ) : (
          <h3>You have not fill correctly</h3>
        )}
      </section>
    </>
  )
}

export default Bid
