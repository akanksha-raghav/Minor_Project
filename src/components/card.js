import React from 'react'

const card = (elem) => {
  return (
    <div
      className="has-text-weight-semibold"
      style={{
        borderRadius: '30px',
        backgroundColor: 'white',
        width: '220px',
        minHeight: '190px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="has-text-centered">
        <img
          src={elem.data.elem.logo}
          alt={elem.data.elem.name}
          style={{
            maxHeight: '50px',
            width: 'auto',
          }}
        />
        <p className="is-size-5">
          {' '}
          <a
            href={elem.data.elem.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            {elem.data.elem.name}{' '}
          </a>
        </p>
        <br />
      </div>
    </div>
  )
}

export default card
