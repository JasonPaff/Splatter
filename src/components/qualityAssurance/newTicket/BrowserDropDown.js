import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux';
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const browserOptions = [
    {browser: 'Microsoft Edge', description: '', current: true},
    {browser: 'Google Chrome', description: '', current: false},
    {browser: 'Mozilla Firefox', description: '', current: false},
    {browser: 'Apple Safari', description: '', current: false},];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectChange: (selected) => dispatch(actionCreators.setBrowser(selected))
    };
}

function BrowserDropDown(props) {

    const [selected, setSelected] = useState(browserOptions[0])

    const handleSelect = (e) => {
        setSelected(e);
        props.onSelectChange(e.browser);
    }

    return (
        <div className="mt-2">
            <label htmlFor="browser" className="block text-sm font-medium text-gray-700">
                Browser
            </label>
            <Listbox value={selected} onChange={handleSelect} id="browser">
                {({open}) => (
                    <>
                        <Listbox.Label className="sr-only">change browser</Listbox.Label>
                        <div className="relative">
                            <div className="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                                <div
                                    className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                                    <div
                                        className="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border
                                        border-transparent rounded-l-md shadow-sm text-white">
                                        <p className="ml-2.5 text-sm font-medium">{selected.browser}</p>
                                    </div>
                                    <Listbox.Button
                                        className="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none
                                         rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none
                                         focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50
                                         focus:ring-indigo-500">
                                        <span className="sr-only">change browser</span>
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
                                    {browserOptions.map((option) => (
                                        <Listbox.Option
                                            key={option.browser}
                                            className={({active}) => classNames(active ? 'text-white bg-indigo-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm')}
                                            value={option}
                                        >
                                            {({selected, active}) => (
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between">
                                                        <p className={selected ? 'font-semibold' : 'font-normal'}>{option.browser}</p>
                                                        {selected ? (
                                                            <span className={active ? 'text-white' : 'text-indigo-500'}>
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
        </div>
    );
}

export default connect(null, mapDispatchToProps)(BrowserDropDown);