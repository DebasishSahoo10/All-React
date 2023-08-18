import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addHuman } from '../Redux/humansSlice'

export const Humans = () => {
    const humans = useSelector(state => state.humans)
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    // console.log(humans)

    const [nameInput, setNameInput] = useState('')

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(addHuman(nameInput))
                setNameInput('')
            }}>
                <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <input type="submit" />
            </form>
            {humans.map(man => {
                return (
                    <li key={man.id} style={{display : 'flex', gap : '5px'}}>
                        <p>{man.name} - </p>
                        <p>{man.tasksAssigned ? tasks.find(task => task.id === man.tasksAssigned).title : 'Not Assigned'}</p>
                    </li>
                )
            })}
        </div>
    )
}