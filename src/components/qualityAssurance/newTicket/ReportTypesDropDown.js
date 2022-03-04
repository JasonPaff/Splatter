import React, {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'

const reportTypes = [
    {type: 'Coding error', description: '', current: true},
    {type: 'Design error', description: '', current: false},
    {type: 'New suggestion', description: '', current: false},
    {type: 'Documentation issue', description: '', current: false},
    {type: 'Hardware problem', description: '', current: false}];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ReportTypesDropDown() {

    const [selected, setSelected] = useState(reportTypes[0])
    return (
        <>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                Type
            </label>
            <Listbox value={selected} onChange={setSelected} id="priority">
                {({open}) => (
                    <>
                        <Listbox.Label className="sr-only">change report type</Listbox.Label>
                        <div className="relative">
                            <div className="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                                <div
                                    className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                                    <div
                                        className="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border
                                        border-transparent rounded-l-md shadow-sm text-white">
                                        <p className="ml-2.5 text-sm font-medium">{selected.type}</p>
                                    </div>
                                    <Listbox.Button
                                        className="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none
                                         rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none
                                         focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50
                                         focus:ring-indigo-500">
                                        <span className="sr-only">change report type</span>
                                        <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                                    </Listbox.Button>
                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg
                                    overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5
                                    focus:outline-none">
                                    {reportTypes.map((option) => (
                                        <Listbox.Option
                                            key={option.type}
                                            className={({active}) => classNames(active ? 'text-white bg-indigo-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm')}
                                            value={option}
                                        >
                                            {({selected, active}) => (
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between">
                                                        <p className={selected ? 'font-semibold' : 'font-normal'}>{option.type}</p>
                                                        {selected ? (
                                                            <span
                                                                className={active ? 'text-white' : 'text-indigo-500'}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                            </span>) : null}
                                                    </div>
                                                    <p className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'mt-2')}>
                                                        {option.description}
                                                    </p>
                                                </div>)}
                                        </Listbox.Option>))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>)}
            </Listbox>
        </>
    );
}