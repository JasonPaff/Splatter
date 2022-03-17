import React from "react";
import HelpDisclosure from "./HelpDisclosure";

export default function Support() {
    document.title = "Splatter - Help";

    return (<div className="flex flex-col items-center">
        <h1 className="text-2xl">Below are some answers to many frequently asked
            questions.</h1>
        <h1 className="text-1xl mb-10 text-gray-500">If you still have any questions please contact admin@fake.com</h1>
        <div className="w-1/2 max-w-md p-2 mx-auto rounded-2xl space-y-4">
            <HelpDisclosure
                text="Do you have an example ticket I can view?"
                image="https://storage.googleapis.com/jason-paff-portfolio/Images/splatter/example_ticket_one.png"/>
            <HelpDisclosure
                text="How to correct errors on already submitted tickets"
                body="Arcu dui vivamus arcu felis bibendum ut tristique et. Arcu non sodales neque
                        sodales ut etiam. Lacus laoreet non curabitur gravida arcu ac.
                        Ultrices eros in cursus turpis massa. Enim neque volutpat ac tincidunt vitae semper
                        quis lectus. Semper eget duis at tellus at urna condimentum. Ornare massa eget egestas purus.
                        Quam elementum pulvinar etiam non quam lacus. Massa tincidunt nunc pulvinar sapien et.
                        Arcu odio ut sem nulla pharetra diam. Nisl nunc mi ipsum faucibus vitae aliquet."/>
            <HelpDisclosure
                text="How do I correct errors on an already submitted ticket?"
                body="Arcu dui vivamus arcu felis bibendum ut tristique et. Arcu non sodales neque
                        sodales ut etiam. Volutpat lacus laoreet non curabitur gravida arcu ac.
                        Ultrices eros in cursus turpis massa. Enim neque volutpat ac tincidunt vitae semper
                        quis lectus. Semper eget duis at tellus at urna condimentum. Ornare massa eget egestas purus.
                        Quam elementum pulvinar etiam non quam lacus. Massa tincidunt nunc pulvinar sapien et.
                        Arcu odio ut sem nulla pharetra diam. Nisl nunc mi ipsum faucibus vitae aliquet."/>
            <HelpDisclosure
                text="How to classify error types?"
                body="Arcu dui vivamus arcu felis bibendum ut tristique et. Arcu non sodales neque
                        sodales ut etiam. Volutpat lacus laoreet non curabitur gravida arcu ac.
                        Ultrices eros in cursus turpis massa. Enim neque volutpat ac tincidunt vitae semper
                        quis lectus. Semper eget duis at tellus at urna condimentum. Ornare massa eget egestas purus.
                        Quam elementum pulvinar etiam non quam lacus. Massa tincidunt nunc pulvinar sapien et.
                        Arcu odio ut sem nulla pharetra diam. Nisl nunc mi ipsum faucibus vitae aliquet."/>
            <HelpDisclosure
                text="What do the different priorities mean?"
                body="Arcu dui vivamus arcu felis bibendum ut tristique et. Arcu non sodales neque
                        sodales ut etiam. Volutpat lacus laoreet non curabitur gravida arcu ac.
                        Ultrices eros in cursus turpis massa. Enim neque volutpat ac tincidunt vitae semper
                        quis lectus. Semper eget duis at tellus at urna condimentum. Ornare massa eget egestas purus.
                        Quam elementum pulvinar etiam non quam lacus. Massa tincidunt nunc pulvinar sapien et.
                        Arcu odio ut sem nulla pharetra diam. Nisl nunc mi ipsum faucibus vitae aliquet."/>
            <HelpDisclosure
                text="What do the different severities mean?"
                body="Arcu dui vivamus arcu felis bibendum ut tristique et. Arcu non sodales neque
                        sodales ut etiam. Volutpat lacus laoreet non curabitur gravida arcu ac.
                        Ultrices eros in cursus turpis massa. Enim neque volutpat ac tincidunt vitae semper
                        quis lectus. Semper eget duis at tellus at urna condimentum. Ornare massa eget egestas purus.
                        Quam elementum pulvinar etiam non quam lacus. Massa tincidunt nunc pulvinar sapien et.
                        Arcu odio ut sem nulla pharetra diam. Nisl nunc mi ipsum faucibus vitae aliquet."/>
            <HelpDisclosure
                text="How do I use the internal messaging system?"
                body="Arcu dui vivamus arcu felis bibendum ut tristique et. Arcu non sodales neque
                        sodales ut etiam. Volutpat lacus laoreet non curabitur gravida arcu ac.
                        Ultrices eros in cursus turpis massa. Enim neque volutpat ac tincidunt vitae semper
                        quis lectus. Semper eget duis at tellus at urna condimentum. Ornare massa eget egestas purus.
                        Quam elementum pulvinar etiam non quam lacus. Massa tincidunt nunc pulvinar sapien et.
                        Arcu odio ut sem nulla pharetra diam. Nisl nunc mi ipsum faucibus vitae aliquet."/>
        </div>
    </div>);
};