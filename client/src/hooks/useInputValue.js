import {useState} from 'react'

function useInputValue(defaultValue, options = {}){
    const [value, setValue] = useState (defaultValue)
    const {onEnter} = options
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && typeof onEnter === 'function') {
            onEnter()
        }
    }
    return {
        bind: {
            onKeyDown: handleKeyDown,
            value,
            onChange: (event) => setValue(event.target.value)
        },
        value: () => value,
        clear: () => setValue('')
    }
}

export default useInputValue