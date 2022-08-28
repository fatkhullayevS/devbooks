import './settings.css'
import { useContext } from 'react'
import { SettingsNav } from "../settingsNav/settingsNav"
import { ThemeContext } from '../../../context/ThemeContext'
import { LangContext } from '../../../context/LangContext'
import { Lang } from '../../Lang/Lang'

export const Settings = () => {

    const { lang: til, setLang } = useContext(LangContext)
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div className={`${theme} settings`}>
            <SettingsNav />
            <div className='container settings-container'>
                <h3>{Lang[til].settings.heading}</h3>
                <form className='form-settings'>
                    <label htmlFor="select">{Lang[til].settings.language}</label><br />
                    <select
                        defaultValue={til}
                        onChange={(evt) => {
                            setLang(evt.target.value)
                        }} id="select" className='select-settings'>
                        <option value="uz">uzbekistan</option>
                        <option value="en">English</option>
                    </select>
                    <p>Please enter your language.</p>
                    <div class="form-check form-switch">
                        <label htmlFor="flexSwitchCheckDefault">{Lang[til].settings.theme}</label>
                        <select
                            defaultValue={theme}
                            onChange={(evt) => {
                                setTheme(evt.target.value)
                            }} id="flexSwitchCheckDefault">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <button type='submit'>{Lang[til].account.button}</button>
                </form>
            </div>
        </div>
    )
}
