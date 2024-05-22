'use client';

import {Todo as TodoType} from "@/util/mockData";
import Todo from "@/components/Todo";
import {CheckboxProps} from "antd";
import {ChevronRightIcon, FolderIcon} from "@heroicons/react/24/solid"
import Directory from "@/components/icons/Directory";
interface TodoCategoryProps {
    category: String,
    todos: TodoType[]
}

export default function TodoCategory({category, todos}: TodoCategoryProps) {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div>
            <div className="flex gap-2 items-center">
                <FolderIcon className="size-6 text-[#acacac]"/>
                <p>{category}</p>
                <div className="h-1/3 border border-black w-44 self-auto"/>
                <ChevronRightIcon className="size-4 text-[#acacac] font-extrabold" fontWeight={20}/>
            </div>
            <div>
                {todos.map(({description, isCompleted}, index) => {
                    return <Todo key={index} description={description} isCompleted={isCompleted} onCheckBoxChange={onChange}/>
                })}
            </div>
        </div>
    )
}