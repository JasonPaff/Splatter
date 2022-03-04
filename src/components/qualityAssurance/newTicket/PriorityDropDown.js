import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const priorityOptions = [
    {priority: '1', description: 'lowest priority', current: false},
    {priority: '2', description: '', current: false},
    {priority: '3', description: '', current: true},
    {priority: '4', description: '', current: false},
    {priority: '5', description: 'highest priority', current: false}];

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectChange: (selected) => dispatch(actionCreators.setPriority(selected))
    };
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function PriorityDropDown(props) {

    const [selected, setSelected] = useState(priorityOptions[0]);

    const handleSelect = (e) => {
        setSelected(e);
        props.onSelectChange(e.priority);
    }

    return (
        <div className="mt-2">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                Priority
            </label>
            <Listbox value={selected} onChange={handleSelect} id="priority">
                {({open}) => (
                    <>
                        <Listbox.Label className="sr-only">change issue priority</Listbox.Label>
                        <div className="relative">
                            <div className="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                                <div
                                    className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                                    <div
                                        className="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border
                                        border-transparent rounded-l-md shadow-sm text-white">
                                        <p className="ml-2.5 text-sm font-medium">{selected.priority}</p>
                                    </div>
                                    <Listbox.Button
                                        className="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none
                                         rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none
                                         focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50
                                         focus:ring-indigo-500">
                                        <span className="sr-only">change issue priority</span>
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
                                    className="origin-top-right absolute z-10 left-0 mt-2 w-72 rounded-md shadow-lg
                                    overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5
                                    focus:outline-none">
                                    {priorityOptions.map((option) => (
                                        <Listbox.Option
                                            key={option.priority}
                                            className={({active}) => classNames(active ? 'text-white bg-indigo-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm')}
                                            value={option}
                                        >
                                            {({selected, active}) => (
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between">
                                                        <p className={selected ? 'font-semibold' : 'font-normal'}>{option.priority}</p>
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
        </div>)
}

export default connect(null, mapDispatchToProps)(PriorityDropDown);