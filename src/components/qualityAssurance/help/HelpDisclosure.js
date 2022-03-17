import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/solid";
import React from "react";

export default function HelpDisclosure(props) {
    return (
        <Disclosure>
            {({open}) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium
                                text-left text-sky-900 bg-sky-100 rounded-lg hover:bg-sky-200 focus:outline-none
                                    focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{props.text}</span>
                        <ChevronUpIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-sky-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 text-sm text-gray-500">
                        {props.image && (
                        <img src={props.image}
                            alt="example ticket"/>)}
                        {props.body && (
                            <p>{props.body}</p>
                        )}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}