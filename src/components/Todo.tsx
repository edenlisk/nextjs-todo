'use client'
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

type subTask = {
    title: String,
    isCompleted: Boolean
}

interface todoProps {
    description: String,
    // dueDate: Date,
    isCompleted: Boolean,
    onCheckBoxChange: (e: CheckboxChangeEvent) => void
    // subTasks: subTask[]
}

export default function Todo(props: todoProps) {
    return (
        <div className="flex justify-start items-center gap-2 m-3">
            {
                <div className="flex gap-2">
                    <Checkbox className={`${inter.className}`} onChange={props.onCheckBoxChange}/>
                    <p
                        className="p-1 text-black font-normal"
                        style={{fontSize: '15px', color: '#413F3F'}}
                    >
                        {props.description}
                    </p>
                </div>
            }
        </div>
    )
}