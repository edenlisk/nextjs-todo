'use client'
import { useState } from "react";
import {user} from "@/util/mockData";
import Todo from "@/components/Todo";
import { CheckboxProps } from "antd";
import {useQuery} from "@apollo/client";
import {GET_TODOS} from "@/util/queries";
import {useEffect} from "react";
export default function Todos() {
    const [todos, setTodos] = useState([
        {
            description: '',
            id: '',
            isCompleted: null
        }
    ])

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const { data, loading, error } = useQuery(GET_TODOS, {
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if (data) {
            setTodos(data.todos);
        } else if (error) {
            console.log(error.message);
        }
    }, [data, error]);

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <h2>{user.username}</h2>
            <ul>
                {/*{user.todos.map(({ title, description, isCompleted }, index) => {*/}
                {/*    return <li key={index}><Todo title={title} description={description} isCompleted={isCompleted} onCheckBoxChange={onChange}/></li>*/}
                {/*})}*/}
            </ul>
        </div>
    )
}