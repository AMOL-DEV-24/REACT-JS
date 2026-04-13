import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line no-unused-vars
export default function ToDo({task}) {
    return (
        <div className='Todo'>
          <p>{task.text}</p>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      )
    }