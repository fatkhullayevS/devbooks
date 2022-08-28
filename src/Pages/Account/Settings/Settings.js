import './settings.css'
import { useContext } from 'react'
import { SettingsNav } from "../settingsNav/settingsNav"
import { ThemeContext } from '../../../context/ThemeContext'

export const Settings = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div className={`${theme} settings`}>
            <SettingsNav />
            <div className='container settings-container'>
                <h3>Settings</h3>
                <form className='form-settings'>
                    <label htmlFor="select">Language</label><br />
                    <select id="select" className='select-settings'>
                        <option value="eng">English</option>
                        <option value="uzb">uzbekistan</option>
                        <option value="rus">Russian</option>
                    </select>
                    <p>Please enter your language.</p>
                    <div class="form-check form-switch">
                        <label htmlFor="flexSwitchCheckDefault">Theme</label>
                        <select
                            defaultValue={theme}
                            onChange={(evt) => {
                                setTheme(evt.target.value)
                            }} id="flexSwitchCheckDefault">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <button type='submit'>Save Changes</button>
                </form>
            </div>
        </div>
    )
}
