import React, { useState, useEffect, useRef, useContext } from 'react'
import { BookDemoProvider } from '~/providers/BookDemoProvider' // Make sure the correct path is used

const BookDemo = () => {
  const { showPopup, setDemoPopupActive } = useContext(BookDemoProvider) // Access context values

  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const scriptRef = useRef(null)

  const loadScript = () => {
    if (isScriptLoaded) return

    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '4832409',
          formId: '496f73f1-b6f5-4417-90c0-8cc7c36f35e5',
          target: '#hubspot-form',
        })
        setIsScriptLoaded(true)
      }
    }
    document.body.appendChild(script)
    scriptRef.current = script
  }

  useEffect(() => {
    if (showPopup) {
      loadScript()
    }
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current)
        setIsScriptLoaded(false)
      }
    }
  }, [showPopup,loadScript])

  if (!showPopup) return null

  return (
    <div
      className="modal-overlay fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      onClick={() => setDemoPopupActive(false)}
    >
      <div
        className="modal-container bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[400px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close absolute top-2 right-2 text-gray-500 text-2xl hover:text-gray-700"
          onClick={() => setDemoPopupActive(false)}
        >
          &times;
        </button>

        {isScriptLoaded ? (
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Book Free Demo
            </h2>
            <p className="text-sm text-gray-600">
              Start your transition to OS Dental. <br />
              Book a demo with us today.
            </p>
          </div>
        ) : null}
        <div id="hubspot-form"></div>
      </div>
    </div>
  )
}

export default BookDemo
