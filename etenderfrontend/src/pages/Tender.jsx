import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TenderForm from '../components/forms/TenderForm'
import TenderItem from '../components/forms/TenderItem'
import Spinner from '../components/Spinner'
import { getTenders, reset } from '../features/tenders/tenderSlice'

function Tender() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tenders, isLoading, isError, message } = useSelector(
    (state) => state.tenders
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTenders())

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
        <p>Tenders Form</p>
      </section>
      <TenderForm />
      <section className='content'>
        {tenders.length > 0 ? (
          <div className='goals'>
            {tenders.map((tender) => (
              <TenderItem key={tender._id} tender={tender} />
            ))}
          </div>
        ) : (
          <h3>You have not fill correctly</h3>
        )}
      </section>
    </>
  )
}

export default Tender
