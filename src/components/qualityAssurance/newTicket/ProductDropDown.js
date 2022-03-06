import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {Listbox, Transition} from '@headlessui/react'
import {ArrowSmDownIcon, CheckIcon} from '@heroicons/react/solid'
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";
import classNameJoiner from "../../../utils/ClassNameJoiner";

const productOptions = [
    'Tournament Life',
    'Etsy Clone',
    'Whats for Dinner?'
];

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectChange: (selected) => dispatch(actionCreators.setProduct(selected))
    };
}

const mapStateToProps = (state) => {
    return {
        product: state.newTicketReducer.product
    };
}

function ProductDropDown(props) {
    return (
        <div className="mt-2 md:flex md:flex-col md:items-center">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                Product
            </label>
            <Listbox value={props.product} onChange={(e) => props.onSelectChange(e)} id="product">
                {({ open }) => (
                <>
                    <Listbox.Label className="sr-only">change product</Listbox.Label>
                    <div className="relative">
                        <div className="inline-flex shadow-sm rounded-md divide-x divide-sky-600">
                            <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-sky-600">
                                <div className="relative inline-flex items-center bg-sky-500 py-2 pl-3 pr-4 border
                                            border-transparent rounded-l-md shadow-sm text-white">
                                    <p className="ml-2.5 text-sm font-medium">{props.product}</p>
                                </div>
                                <Listbox.Button
                                    className="relative inline-flex items-center bg-sky-500 p-2 rounded-l-none
                                            rounded-r-md text-sm font-medium text-white hover:bg-sky-600 focus:outline-none
                                            focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50
                                            focus:ring-sky-500">
                                    <span className="sr-only">change product</span>
                                    <ArrowSmDownIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                                </Listbox.Button>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition duration-500 ease-out"
                            leaveFrom="transform opacity-100"
                            leaveTo="transform opacity-0"
                        >
                            <Listbox.Options
                                static
                                className="origin-top-right absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg
                                        overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5
                                        focus:outline-none">
                                {productOptions.map((option) => (
                                    <Listbox.Option
                                        key={option}
                                        className={({active}) => classNameJoiner(active ? 'text-white bg-sky-500'
                                            : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm')}
                                        value={option}
                                    >
                                        {({selected, active}) => (
                                            <div className="flex flex-col">
                                                <div className="flex justify-between">
                                                    <p className={selected ? 'font-semibold' : 'font-normal'}>{option}</p>
                                                    {selected ? (
                                                        <span className={active ? 'text-white' : 'text-sky-500'}>
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                            </span>) : null}
                                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDropDown);