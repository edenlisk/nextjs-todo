'use client'
import { useState } from "react";
import {user} from "@/util/mockData";
import Todo from "@/components/Todo";
import { CheckboxProps } from "antd";
import {useQuery} from "@apollo/client";
import {GET_TODOS} from "@/util/queries";
import {useEffect} from "react";
import TodoCategory from "@/components/TodoCategory";
export default function Todos() {
    const [todos, setTodos] = useState([
        {
            description: '',
            id: '',
            isCompleted: false
        }
    ])

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    // const { data, loading, error } = useQuery(GET_TODOS, {
    //     // fetchPolicy: 'network-only',
    //     variables: {
    //         userId: "6636a2b18e3d54132f02d5fa"
    //     }
    // });

    // useEffect(() => {
    //     if (data) {
    //         console.log(data);
    //         setTodos(data.todos);
    //     } else if (error) {
    //         console.log(error.message);
    //     }
    // }, [data, error]);
    //
    // if (loading) {
    //     return <div>Loading...</div>
    // }


    return (
        <div>
            <h2>{user.username}</h2>
            <h1>Nextjs</h1>
            <ul>
                {user.todos.map(({ todos, category }, index) => {
                    return <li key={index}>
                        <TodoCategory category={category} todos={todos}/>
                    </li>
                })}
            </ul>
        </div>
    )
}