'use client'
import {user} from "@/util/mockData";
import Todo from "@/components/Todo";
import { CheckboxProps } from "antd";

export default function Todos() {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div>
            <h2>{user.username}</h2>
            <ul>
                {user.todos.map(({ title, description, isCompleted }, index) => {
                    return <li key={index}><Todo title={title} description={description} isCompleted={isCompleted} onCheckBoxChange={onChange}/></li>
                })}
            </ul>
        </div>
    )
}