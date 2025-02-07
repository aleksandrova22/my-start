"use client";
import {useState } from 'react';
import classes from './FormCalc.module.css';
import { config } from './const';
import {CalcBJU} from './CalcBJU';


function DataForm({ columns, values, setValues }) {
    return <div >
        {columns.map(({ setVal, title }, i) =>
            <div key={i}>    {title} <br />
                {setVal
                    ?
                    <input type='number' value={values[i]}
                        onInput={event => setValues(prev => prev.with(i, event.target.value))} />
                    : ''}
            </div>)}  <br />

    </div>;
}


export function FormCalc() {
    'use client';
    console.log('FormCalc=');
    const
        [addFormValues, setAddFormValues] = useState(Array.from({ length: config.columns.length }, () => '')),
        [valueLifeStyle, setValueLifeStyle] = useState(''),
        [valueGender, setValueGender] = useState(null),
        [valueTarget, setValueTarget] = useState(null),
        [show, setShow] = useState(false);

    return <>
        <div className={classes.calc}>

            <h3>Что такое КБЖУ?</h3>
            <p>Аббревиатура "КБЖУ" расшифровывается следующим образом: «К» – калории, «Б» – белки, «Ж» – жиры, «У» – углеводы. </p>
            <p>Данные элементы являются жизненно важными для человеческого организма.</p>
            <p>Соблюдать КБЖУ-БАЛАНС - это обязательное условие для успешного избавления от лишних килограммов</p>
            <p>Калькулятор КБЖУ поможет рассчитать ккалории по формуле Миффлина-Сан Жеора</p>
            <br />

            <h3>КАЛЬКУЛЯТОР КБЖУ</h3>
            <div>
                <p>Ваш пол:</p>
                <button style={{ backgroundColor: valueGender === 'M' || '' ? 'green' : '' }}
                    onClick={() => { setValueGender('M') }}>Мужской </button>
                <button style={{ backgroundColor: valueGender === 'W' || '' ? 'green' : '' }}
                    onClick={() => { setValueGender('W') }}> Женский </button>
            </div>
            <br />
            <DataForm columns={config.columns} values={addFormValues} setValues={setAddFormValues} />
            <br />
            <form onSubmit={event => setValueForm(event.target.value)} >
                Ваш образ жизни:
                <br />
                <select placeholder="Не указано" value={valueLifeStyle} onChange={event => setValueLifeStyle(event.target.value)}>
                    <option value="">Не указано</option>
                    <option value="lifeSmall">Малоподвижный</option>
                    <option value="lifeMedium">Тренировки 1-3 раза в неделю</option>
                    <option value="lifeLarge">Тренировки 3-5 раза в неделю</option>
                    <option value="LifeExtrim">Высокие нагрузки каждый день</option>
                </select>
            </form>
            <br />
            <p>Ваша цель:</p>
            <div>
                <button style={{ backgroundColor: valueTarget === '-1' || '' ? 'green' : '' }}
                    onClick={() => { setValueTarget('-1') }}>Сбросить вес </button>
                <button style={{ backgroundColor: valueTarget === '0' || '' ? 'green' : '' }}
                    onClick={() => { setValueTarget('0') }}>Поддерживать вес </button>
                <button style={{ backgroundColor: valueTarget === '+1' || '' ? 'green' : '' }}
                    onClick={() => { setValueTarget('+1') }}>Набрать мышечную массу </button>
            </div>
            <br />
            <button style={{ backgroundColor: show ? 'green' : '' }}
                onClick={() => {
                    // if (!valueGender) return <span></span>
                    setShow(!show); console.log(addFormValues, valueLifeStyle, valueGender, valueTarget); <div >
                    </div>
                }}>
                Рассчитать </button>
            <div >
                {show && <CalcBJU children={{ valueGender, valueLifeStyle, valueTarget, addFormValues, show }} />}
            </div>

        </div>
    </>
};


