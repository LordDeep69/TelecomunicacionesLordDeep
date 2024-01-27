import React, { useState, type ChangeEvent } from 'react'
import './engineSearch.scss'
import { useForm } from 'react-hook-form'

interface EngineSearchProps {
  getInput: (value: string) => void
}

const EngineSearch: React.FC<EngineSearchProps> = ({ getInput }) => {
  const { setValue, register } = useForm()
  const [hasText, setHasText] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setHasText(value.trim() !== '') // Verifica si el valor tiene texto (ignora espacios)
    getInput(value)
  }

  const handleClear = (): void => {
    setValue('search', '')
    setHasText(false) // Cuando se limpia el input, no hay texto
    getInput('')
  }

  return (
    <div className="search">
      <figure className='figureSearch'>
        <img
          src="https://res.cloudinary.com/dibw7aluj/image/upload/v1693511234/Search_wxmped.svg"
          alt="Search"
          className='imgSearch'
        />
      </figure>

      <input
        type="text"
        placeholder="Buscar..."
        {...register('search')}
        onChange={handleChange}
      />

      {hasText && (
        <figure className="delete" onClick={handleClear}>
          <img
            src="https://res.cloudinary.com/dibw7aluj/image/upload/v1693511629/Trash_hduwfh.svg"
            alt="Delete"
          />
        </figure>
      )}
    </div>
  )
}

export default EngineSearch
