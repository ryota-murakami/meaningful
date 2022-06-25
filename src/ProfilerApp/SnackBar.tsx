import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'

import type { SnackBarMessage } from './redux/snackbarSlice'

export const variants = {
  danger: 'bg-red-500 text-white hover:bg-red-600',
  inverse:
    'bg-white text-green-400 border border-green-400 hover:bg-green-500 hover:text-white',
  primary: 'bg-green-500 hover:bg-green-600 text-white',
  secondary: 'bg-blue-500 hover:bg-blue-600 text-white',
}

interface Props {
  componentName: SnackBarMessage['componentName']
  message: SnackBarMessage['message']
  variant: SnackBarMessage['variant']
}

const SnackBar: React.FC<Props> = ({ message, componentName }) => {
  const [show, setShow] = useState(true)

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="ring-1 ring-black ring-opacity-5 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="w-6 h-6 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">
                {componentName}
              </p>
              <p className="mt-1 text-sm text-black">{message}</p>
            </div>
            <div className="flex flex-shrink-0 ml-4">
              <button
                className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex text-gray-400 bg-white rounded-md"
                onClick={() => {
                  setShow(false)
                }}
              >
                <span className="sr-only">Close</span>
                <XIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default SnackBar
