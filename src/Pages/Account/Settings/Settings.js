import './settings.css'
import { SettingsNav } from "../settingsNav/settingsNav"

export const Settings = () => {
    return (
        <div className='settings'>
            <SettingsNav />
            <div className='container settings-container'>
                <h3>Settings</h3>
                <label htmlFor="select">Language</label><br />
                <select id="select" className='select-settings'>
                    <option value="eng">English</option>
                    <option value="uzb">uzbekistan</option>
                    <option value="rus">Russian</option>
                </select>
                <p>Please enter your first name.</p>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
            </div>
        </div>
    )
}
